import time
import BLE_Tool

CWS100 = BLE_Tool.BLE_Device_Connect('00:13:aa:00:bd:c1', '0000ffe1-0000-1000-8000-00805f9b34fb')
CWS100.Start_Connect()

while True:
    TTY_Read = CWS100.Read_TTY(4096)
    print(TTY_Read)
    #time.sleep(1)
    TTY_Read = CWS100.Read_TTY(4096)
    print(TTY_Read)
    #time.sleep(1)
