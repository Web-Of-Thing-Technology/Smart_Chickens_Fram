import logging
import select
import signal
import pty
import os


logger = logging.getLogger(__name__)


class Error(Exception):
    """Base error"""


class ReadTimeout(Error):
    """Polling timeout"""


class PlayerState(object):
    """The state of the player"""
    PLAY = 'play'
    PAUSE = 'pause'
    STOP = 'stop'


class Mp3FilePlayer(object):

    def __init__(self, file_path):
        self.file_path = file_path
        self.player_state = PlayerState.STOP
        self.child_tty_fd = None
        self.child_pid = None
        self.poller = select.poll()

    def _start_play(self):
        """This method forks a child process and start exec 'madplay' to play
            the mp3 file. Since 'madplay' can ONLY be controlled by tty, we have
            to use pty.fork and use the return fd in the parent process (which
            connects the child's controlling terminal) to control the playback.
        """
        # Register SIGCHLD to get notified when the child process terminated
        signal.signal(signal.SIGCHLD, self._sigchld_handler)

        pid, fd = pty.fork()
        if pid == 0:
            # Child process. Exec madplay
            os.execl('/usr/bin/madplay', '--tty-control', self.file_path)
        else:
            # Parent process
            self.child_tty_fd = fd
            logger.debug('Forked child TTY fd: {}'.format(self.child_tty_fd))
            self.child_pid = pid
            logger.debug('Forked child PID: {}'.format(self.child_pid))
            self._clear_tty()

    def _read_tty(self, n, timeout=None):
        """Read the TTY fd by n bytes or raise ReadTimeout if reached specified timeout.
            The timeout value is in milliseconds.
        """
        self.poller.register(self.child_tty_fd, select.POLLIN)
        events = self.poller.poll(timeout)
        self.poller.unregister(self.child_tty_fd)  # Immediately after the polling
        if not events:
            raise ReadTimeout

        assert len(events) == 1, 'Number of polled events != 1'

        fd, event = events[0]
        if event != select.POLLIN:
            raise Error('Unexpected polled event: {}'.format(event))
        else:
            data = os.read(self.child_tty_fd, n)
            return data

    def _clear_tty(self):
        """Clearing the TTY fd. Preventing the receiving buffer to overflow."""
        while True:
            # Keep reading until timeout, which means nothing more to read.
            try:
                self._read_tty(1024, timeout=0)
            except ReadTimeout:
                return

    def _sigchld_handler(self, signum, frame):
        """Handler function of SIGCHLD"""
        logger.info('SIGCHLD signal received.')
        self.stop()

    def play(self):
        """Start the playback or resume from pausing"""
        if self.player_state == PlayerState.STOP:
            self._start_play()
            self.player_state = PlayerState.PLAY
        elif self.player_state == PlayerState.PAUSE:
            os.write(self.child_tty_fd, 'p')
            self._clear_tty()
            self.player_state = PlayerState.PLAY
        else:
            pass

    def pause(self):
        """Pause the playback"""
        if self.player_state == PlayerState.PLAY:
            os.write(self.child_tty_fd, 'p')
            self._clear_tty()
            self.player_state = PlayerState.PAUSE
        else:
            pass

    def stop(self):
        """Stop the playback. This will stop the child process."""
        if self.player_state != PlayerState.STOP:
            # Unregister the signal (set to SIG_DFL) to prevent recusively calling stop()
            signal.signal(signal.SIGCHLD, signal.SIG_DFL)

            logger.debug('Kill pid {}'.format(self.child_pid))
            os.kill(self.child_pid, signal.SIGTERM)
            logger.debug('Wait pid {}'.format(self.child_pid))
            os.waitpid(self.child_pid, 0)
            logger.debug('Child process {} died.'.format(self.child_pid))
            self.player_state = PlayerState.STOP
