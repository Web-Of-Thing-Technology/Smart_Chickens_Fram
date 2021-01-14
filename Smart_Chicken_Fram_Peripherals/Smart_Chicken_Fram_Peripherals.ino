#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>

#include <ESP8266WiFi.h>

#include <MQTT.h>

#include <BlynkSimpleEsp8266.h>

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

// Blynk Conf.........................
#define BLYNK_PRINT Serial

BlynkTimer timer;

char auth[] = "GwqgQPdw8So5k-iS-yTN4KCvoX0YSanZ";
//Blynk Conf..........................

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

  // Initialize Blynk Client.
  Blynk.begin(auth, ssid, pass, IPAddress(192,168,43,1), 8080);

  // Initialize Blynk Timer.
  timer.setInterval(5000L, Get_DHT_Sensor_Data);
}

void loop() 
{
  client.loop();
  delay(10);  // <- fixes some issues with WiFi stability
  
  if (!client.connected()) 
  {
    Connect_To_WIFI_And_MQTT();
  }

  Blynk.run();
  timer.run();
}

void Get_DHT_Sensor_Data(void)
{
  Measure_Temperature_And_Humidity();
  float Temperature = Get_Temperature();
  float Humidity = Get_Humidity();

  client.publish("Sensor1/Temperature", String(Temperature));
  client.publish("Sensor1/Humidity", String(Humidity));

  //client.publish("Sensor1/Temperature", String(Temperature) + "°C");
  //client.publish("Sensor1/Humidity", String(Humidity) + "%");

  Blynk.virtualWrite(V1, Temperature);
  Blynk.virtualWrite(V2, Humidity);
}
