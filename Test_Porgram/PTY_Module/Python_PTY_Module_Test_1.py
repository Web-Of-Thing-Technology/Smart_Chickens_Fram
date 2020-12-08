import pty
import time
import os
import sys


pid, fd = pty.fork()
if pid == 0:
    # Child process
    while True:
        try:
            sys.stdout.write('Hello World!\n')
            time.sleep(100)
        except KeyboardInterrupt:
            sys.stdout.write('SIGINT Received!\n')
            sys.exit(1)
else:
    print('Parent wait for 1 sec then write 0x03...')
    time.sleep(1)
    print('Parent write 0x03')
    os.write(fd, b'\x03')
    # Read until EOF or Input/Output Error
    data = b''
    while True:
        try:
            buf = os.read(fd, 1024)
        except OSError:
            break
        else:
            if buf != b'':
                data += buf
            else:
                break
    print('Parent read from pty fd: {}'.format(repr(data)))
    print('Parent wait for child process {!r} to exit...'.format(pid))
    pid, status = os.waitpid(pid, 0)
    print('Parent exit')
