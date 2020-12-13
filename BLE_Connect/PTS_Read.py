import time
import serial

class Read_PTS(object):
    def __init__(self, tty_name):
        self.ser = serial.Serial()
        self.ser.port = tty_name
        # If it breaks try the below
        #self.serConf() # Uncomment lines here till it works

        self.ser.open()
        self.ser.flushInput()
        self.ser.flushOutput()

        self.addr = None
        #self.setAddress(0)

    def Send_CMD_And_Recive(self, cmd_str):
        self.ser.write((cmd_str + "\r\n").encode())
        time.sleep(0.5)
        return self.ser.readline().decode('utf-8')
        #return self.ser.readline()

    def Send_CMD(self, cmd_str):
        self.ser.write((cmd_str + "\r\n").encode())
        time.sleep(0.5)
    
    def Read_CMD(self):
        return self.ser.readline().decode('utf-8')
        #return self.ser.readline()
    
    def serConf(self):
        self.ser.baudrate = 9600
        self.ser.bytesize = serial.EIGHTBITS
        self.ser.parity = serial.PARITY_NONE
        self.ser.stopbits = serial.STOPBITS_ONE
        self.ser.timeout = 0 # Non-Block reading
        self.ser.xonxoff = False # Disable Software Flow Control
        self.ser.rtscts = False # Disable (RTS/CTS) flow Control
        self.ser.dsrdtr = False # Disable (DSR/DTR) flow Control
        self.ser.writeTimeout = 2

    def close(self):
        self.ser.close()
