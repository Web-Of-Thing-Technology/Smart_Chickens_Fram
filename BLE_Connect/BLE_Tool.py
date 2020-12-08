import os
import sys
import pty
import signal
import select
import time
import logging

logger = logging.getLogger(__name__)

class Error(Exception):
    """Base error"""

class ReadTimeout(Error):
    """Polling timeout"""

class BLE_Device_Connect(object):
    def __init__(self, BLE_Device_ID, BLE_Service_ID):
        self.BLE_Device_ID = BLE_Device_ID
        self.BLE_Service_ID = BLE_Service_ID
        self.Child_TTY_FD = None
        self.Child_PID = None
        self.poller = select.poll()
        
    def Start_Connect(self):
        """
            This method forks a child process and start exec 'ble-serial' to connect
            to BLE Device. Since 'ble-serial' can be controlled by tty, we decied
            to use pty.fork and use the return fd in the parent process (which
            connects the child's controlling terminal) to control the ble-serial 
            program.
        """
        # Register SIGCHLD to get notified when the child process terminated
        signal.signal(signal.SIGCHLD, self._Sigchld_Handler)
    
        PID, FD = pty.fork()
        
        if PID == 0:
            # Child process. Exec ble-serial
            os.execl('/usr/local/bin/ble-serial', 'ble-serial', '-d', self.BLE_Device_ID, '-r', self.BLE_Service_ID)
        else:
            # Parent process
            self.Child_TTY_FD = FD
            logger.debug('Forked Child TTY FD Is: {}'.format(self.Child_TTY_FD))
            self.Child_PID = PID
            logger.debug('Forked Child PID: {}'.format(self.Child_PID))
            #time.sleep(1)
            
    def Read_TTY(self, N, timeout=None):
        """
            Read the TTY fd by n bytes or raise ReadTimeout if reached specified timeout.
            The timeout value is in milliseconds.
        """
        self.poller.register(self.Child_TTY_FD, select.POLLIN)
        events = self.poller.poll(timeout)
        self.poller.unregister(self.Child_TTY_FD)  # Immediately after the polling
        
        if not events:
            raise ReadTimeout

        assert len(events) == 1, 'Number of polled events != 1'

        FD, event = events[0]
        
        if event != select.POLLIN:
            raise Error('Unexpected Polled Event: {}'.format(event))
        else:
            Data = os.read(self.Child_TTY_FD, N)
            return Data

    def _Clear_TTY(self):
        """Clearing the TTY fd. Preventing the receiving buffer to overflow."""
        while True:
            # Keep reading until timeout, which means nothing more to read.
            try:
                self._Read_TTY(1024, timeout=0)
            except ReadTimeout:
                return
                
    def _Sigchld_Handler(self, signum, frame):
        """Handler function of SIGCHLD"""
        logger.info('SIGCHLD Signal Received !!!')
        self.End_Porgram()
        
    def End_Porgram(self):
        # Unregister the signal (set to SIG_DFL) to prevent recusively calling stop()
        signal.signal(signal.SIGCHLD, signal.SIG_DFL)
        logger.debug('Kill PID {}'.format(self.Child_PID))
        os.kill(self.Child_PID, signal.SIGTERM)
        logger.debug('Wait PID {}'.format(self.Child_PID))
        os.waitpid(self.Child_PID, 0)
        logger.debug('Child Process {} Died.'.format(self.Child_PID))
        
class Read_BLE_Recive_Data(object):
    def __init__(self):
        self.Slave_PTS_File_Location = '/tmp/ttyBLE'
    
    def Read(self):
        pass
