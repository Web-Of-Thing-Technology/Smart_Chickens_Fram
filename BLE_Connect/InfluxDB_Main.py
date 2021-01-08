from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS

class InfluxDB_Client_Create(object):
    def __init__(self, InfluxDB_Url, InfluxDB_Bucket, InfluxDB_Token, InfluxDB_Org):
        self.InfluxDB_Url = InfluxDB_Url
        self.InfluxDB_Bucket = InfluxDB_Bucket
        self.InfluxDB_Token = InfluxDB_Token
        self.InfluxDB_Org = InfluxDB_Org
        
        self.InfluxDB_Client = InfluxDBClient(url=self.InfluxDB_Url, token=self.InfluxDB_Token, org=self.InfluxDB_Org)
        
        self.InfluxDB_Write_API = self.InfluxDB_Client.write_api(write_options=SYNCHRONOUS)
        self.InfluxDB_Query_API = self.InfluxDB_Client.query_api()

    def CWS100_Data_To_InfluxDB(self, CWS100_Data):
        self.CWS100_Data = CWS100_Data
        
        self.Data_Point = Point("CWS100_Recive_Data").tag("location", "Machine_1").tag("classification", "D").field("Weight", self.CWS100_Data)
        
        #-----Send Data To InfluxDB
        self.InfluxDB_Write_API.write(bucket=self.InfluxDB_Bucket, record=self.Data_Point)
        #-----Send Data To InfluxDB

    def Read_CWS100_Data_From_InfluxDB(self):
        pass

    