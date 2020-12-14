import sys
import time
import logging
import BLE_Tool
import PTS_Read
import Data_Process

logging.basicConfig(level=logging.WARNING)
logger = logging.getLogger(__name__)

CWS100 = BLE_Tool.BLE_Device_Connect('00:13:aa:00:bd:c1', '0000ffe1-0000-1000-8000-00805f9b34fb')
CWS100.Start_Connect()
time.sleep(10)

try:
    Read_CWS100_Data = PTS_Read.Read_PTS("/tmp/ttyBLE")
except:
    logger.critical('Can Not Open Pseudo Terminal Slave !')
    logger.warning('Program Will Now Exit !')
    sys.exit()

while True:
    Recive_Data = Read_CWS100_Data.Read_CMD()
    Analysis = Data_Process.PTS_Data_Process(Recive_Data)
    if Recive_Data == '' :
        pass
    else:
        print(Analysis.Get_Weight())

#For BLE_Tool.py Debug Use !
"""
while True:
    TTY_Read = CWS100.Read_TTY(4096)
    print(TTY_Read)
    #time.sleep(1)
"""
