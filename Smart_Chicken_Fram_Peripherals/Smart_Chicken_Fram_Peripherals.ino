#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>

#include <ESP8266WiFi.h>
#include <MQTT.h>

// DHT_Sensor_Conf...........
#define DHTPIN D3     // Digital pin connected to the DHT sensor

// Uncomment the type of sensor in use:
//#define DHTTYPE    DHT11     // DHT 11
#define DHTTYPE    DHT22     // DHT 22 (AM2302)
//#define DHTTYPE    DHT21     // DHT 21 (AM2301)

DHT_Unified dht(DHTPIN, DHTTYPE);

uint32_t delayMS;
// DHT_Sensor_Conf...........

// WIFI_And_MQTT_Conf.................
const char* ssid = "Enter Your SSID Here !";
const char* pass = "Enter Your SSID Password Here !";

WiFiClient net;
MQTTClient client;

unsigned long lastMillis = 0;
// WIFI_And_MQTT_Conf.................

void setup() 
{
  Serial.begin(250000);

  //// Initialize WIFI And MQTT Client.
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, pass);
  client.begin("192.168.43.50", net);
  client.onMessage(messageReceived);
  Connect_To_WIFI_And_MQTT();
  
  // Initialize DHT device.
  dht.begin();
  Print_DHT_Sensor_Info();
}

void loop() 
{
  client.loop();
  delay(10);  // <- fixes some issues with WiFi stability
  
  if (!client.connected()) 
  {
    Connect_To_WIFI_And_MQTT();
  }

  /*
  if (millis() - lastMillis > 1000) 
  {
    lastMillis = millis();
    client.publish("/hello", "Test");
  }
  */

  Measure_Temperature_And_Humidity();
  float Temperature = Get_Temperature();
  float Humidity = Get_Humidity();

  //client.publish("Sensor1/Temperature", String(Temperature) + "°C");
  //client.publish("Sensor1/Humidity", String(Humidity) + "%");

  client.publish("Sensor1/Temperature", String(Temperature) + "°C");
  client.publish("Sensor1/Humidity", String(Humidity));

  Serial.print(F("Temperature: "));
  Serial.print(Temperature);
  Serial.println(F("°C"));

  Serial.print(F("Humidity: "));
  Serial.print(Humidity);
  Serial.println(F("%"));
}
