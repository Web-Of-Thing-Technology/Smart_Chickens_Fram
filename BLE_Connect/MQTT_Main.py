#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import logging

import paho.mqtt.client as mqtt

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

class Publish_To_MQTT(object):
    def __init__(self):
        self.MQTT_SERVER = "127.0.0.1"  
        self.MQTT_PORT = 1883  
        self.MQTT_ALIVE = 60
        self.mqtt_client = mqtt.Client()  
        self.mqtt_client.connect(self.MQTT_SERVER, self.MQTT_PORT, self.MQTT_ALIVE)
        
    def Publish_Data(self, dataChnId1, payload):
        self.dataChnId1 = dataChnId1
        self.MQTT_TOPIC1 = self.dataChnId1
        #self.payload = {"dataChnId":self.dataChnId1,"value":payload}
        self.payload = payload
        logger.info(self.dataChnId1 + " : " + str(payload))
        #self.mqtt_client.publish(self.MQTT_TOPIC1, json.dumps(self.payload), qos=1)
        self.mqtt_client.publish(self.MQTT_TOPIC1, self.payload, qos=1)
