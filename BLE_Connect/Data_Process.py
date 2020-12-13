import re

class Log_Data_Process(object):
    def __init__(self, Input_String):
        self.Input_String = Input_String
        self.Test_Input_String = '2020-12-04 15:32:27.132470 -> BLE-IN: 442c3834362e35'
        self.Temp_String = None
        self.Regex = re.compile(r'\S+')
        self.Regex1 = re.compile(r'(?<=\bD,).*\b')
        
    def Get_Date(self):
        self.Temp_String = self.Regex.findall(self.Input_String)
        return self.Temp_String[0]

    def Get_Time(self):
        self.Temp_String = self.Regex.findall(self.Input_String)
        return self.Temp_String[1]

    def Get_Weight(self):
        self.Temp_String = self.Regex.findall(self.Input_String)
        self.Temp_String = bytes.fromhex(self.Temp_String[4]).decode('utf-8')
        self.Temp_String = self.Regex1.findall(self.Temp_String)
        return self.Temp_String[0]
        
class PTS_Data_Process(object):
    def __init__(self, Input_String):
        self.Input_String = Input_String
        self.Temp_String = None
        self.Regex = re.compile(r'(?<=\bD,).*\b')
        
    def Get_Weight(self):
        self.Temp_String = self.Regex.findall(self.Input_String)
        return self.Temp_String[0]
