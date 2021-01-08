import sys
import time
import logging
import BLE_Tool
import PTS_Read
import Data_Process
import MQTT_Main
import InfluxDB_Main

logging.basicConfig(level=logging.WARNING)
logger = logging.getLogger(__name__)

CWS100 = BLE_Tool.BLE_Device_Connect('00:13:aa:00:bd:c1', '0000ffe1-0000-1000-8000-00805f9b34fb')
CWS100.Start_Connect()
time.sleep(10)

try:
    Read_CWS100_Data = PTS_Read.Read_PTS("/tmp/ttyBLE")
    Read_CWS100_Data.serConf()
except:
    logger.critical('Can Not Open Pseudo Terminal Slave !')
    logger.warning('Program Will Now Exit !')
    sys.exit()

CWS100_MQTT = MQTT_Main.Publish_To_MQTT()
CWS100_InfluxDB = InfluxDB_Main.InfluxDB_Client_Create("http://localhost:8086", "Test_Bucket", "CN10xIU-pX1n71Gx7ZR9uDG-zq3sU9XCRjlgY-Wv_LuvxnvWhaUhVQJb_06xCpnA0UC__1r5YgcoW9G6HRytWw==", "InfluxDB")

while True:
    Recive_Data = Read_CWS100_Data.Read_CMD()
    Analysis = Data_Process.PTS_Data_Process(Recive_Data)
    if Recive_Data == '' :
        pass
    else:
        CWS100_MQTT.Publish_Data("/CWS100/Weight", Analysis.Get_Weight())
        CWS100_InfluxDB.CWS100_Data_To_InfluxDB(int(Analysis.Get_Weight()))
        print(Analysis.Get_Weight())

#For BLE_Tool.py Debug Use !
"""
while True:
    TTY_Read = CWS100.Read_TTY(4096)
    print(TTY_Read)
    #time.sleep(1)
"""
