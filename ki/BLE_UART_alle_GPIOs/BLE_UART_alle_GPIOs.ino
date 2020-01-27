/*
    Video: https://www.youtube.com/watch?v=oCMOYS71NIU
    Based on Neil Kolban example for IDF: https://github.com/nkolban/esp32-snippets/blob/master/cpp_utils/tests/BLE%20Tests/SampleNotify.cpp
    Ported to Arduino ESP32 by Evandro Copercini

   Create a BLE server that, once we receive a connection, will send periodic notifications.
   The service advertises itself as: 6E400001-B5A3-F393-E0A9-E50E24DCCA9E
   Has a characteristic of: 6E400002-B5A3-F393-E0A9-E50E24DCCA9E - used for receiving data with "WRITE" 
   Has a characteristic of: 6E400003-B5A3-F393-E0A9-E50E24DCCA9E - used to send data with  "NOTIFY"

   The design of creating the BLE server is:
   1. Create a BLE Server
   2. Create a BLE Service
   3. Create a BLE Characteristic on the Service
   4. Create a BLE Descriptor on the characteristic
   5. Start the service.
   6. Start advertising.

   In this example rxValue is the data received (only accessible inside that function).
   And txValue is the data to be sent, in this example just a byte incremented every second. 
*/
#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>


BLEServer *pServer = NULL;
BLECharacteristic * pTxCharacteristic;
bool deviceConnected = false;
bool oldDeviceConnected = false;
uint8_t txValue = 0;

// See the following for generating UUIDs:
// https://www.uuidgenerator.net/

#define SERVICE_UUID           "00001231-0000-1000-8000-00805f9b34fb" // UART service UUID
#define CHARACTERISTIC_UUID_RX "00001232-0000-1000-8000-00805f9b34fb"
#define CHARACTERISTIC_UUID_TX "00001233-0000-1000-8000-00805f9b34fb"

class MyServerCallbacks: public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      deviceConnected = true;
    };

    void onDisconnect(BLEServer* pServer) {
      deviceConnected = false;
    }
};

class MyCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *pCharacteristic) {
      std::string rxValue = pCharacteristic->getValue();

      if (rxValue.length() > 0) {
        Serial.println("*********");
        Serial.print("Received Value: ");
        for (int i = 0; i < rxValue.length(); i++)
          Serial.print(rxValue[i]);

        if (rxValue=="00"){
        digitalWrite(0,0);  
          }
        if (rxValue=="01"){
        digitalWrite(0,1);  
          }
        if (rxValue=="20"){
        digitalWrite(2,0);  
          }
        if (rxValue=="21"){
        digitalWrite(2,1);  
          }
        if (rxValue=="40"){
        digitalWrite(4,0);  
          }
        if (rxValue=="41"){
        digitalWrite(4,1);  
          }
        if (rxValue=="50"){
        digitalWrite(5,0);  
          }
        if (rxValue=="51"){
        digitalWrite(5,1);  
          }
        if (rxValue=="120"){
        digitalWrite(12,0);  
          }
        if (rxValue=="121"){
        digitalWrite(12,1);  
          }
        if (rxValue=="130"){
        digitalWrite(13,0);  
          }
        if (rxValue=="131"){
        digitalWrite(13,1);  
          }
        if (rxValue=="140"){
        digitalWrite(14,0);  
          }
        if (rxValue=="141"){
        digitalWrite(14,1);  
          }
        if (rxValue=="150"){
        digitalWrite(15,0);  
          }
        if (rxValue=="151"){
        digitalWrite(15,1);  
          }
        if (rxValue=="160"){
        digitalWrite(16,0);  
          }
        if (rxValue=="161"){
        digitalWrite(16,1);  
          }
        if (rxValue=="170"){
        digitalWrite(17,0);  
          }
        if (rxValue=="171"){
        digitalWrite(17,1);  
          }
        if (rxValue=="180"){
        digitalWrite(18,0);  
          }
        if (rxValue=="181"){
        digitalWrite(18,1);  
          }
        if (rxValue=="190"){
        digitalWrite(19,0);  
          }
        if (rxValue=="191"){
        digitalWrite(19,1);  
          }
        if (rxValue=="links"){
        digitalWrite(13,1);
        digitalWrite(12,0);  
          }
        if (rxValue=="rechts"){
        digitalWrite(13,0);
        digitalWrite(12,1);  
          }

        Serial.println();
        Serial.println("*********");
      }
    }
};


void setup() {
  Serial.begin(115200);
  pinMode(0, OUTPUT);
  pinMode(2, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(13, OUTPUT);
  pinMode(14, OUTPUT);
  pinMode(15, OUTPUT);
  pinMode(16, OUTPUT);
  pinMode(17, OUTPUT);
  pinMode(18, OUTPUT);
  pinMode(19, OUTPUT);
  pinMode(21, OUTPUT);
  pinMode(22, OUTPUT);
  pinMode(23, OUTPUT);
  // Create the BLE Device
  BLEDevice::init("Hermann rockt!");

  // Create the BLE Server
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());

  // Create the BLE Service
  BLEService *pService = pServer->createService(SERVICE_UUID);

  // Create a BLE Characteristic
    pTxCharacteristic = pService->createCharacteristic(
                    CHARACTERISTIC_UUID_TX,
                    BLECharacteristic::PROPERTY_NOTIFY
                  );
                      
  pTxCharacteristic->addDescriptor(new BLE2902());
  
  BLECharacteristic * pRxCharacteristic = pService->createCharacteristic(
                       CHARACTERISTIC_UUID_RX,
                      BLECharacteristic::PROPERTY_WRITE
                    );

  pRxCharacteristic->setCallbacks(new MyCallbacks());

  // Start the service
  pService->start();

  // Start advertising
  pServer->getAdvertising()->start();
  Serial.println("Waiting a client connection to notify...");
}

void loop() {

    if (deviceConnected) {
        pTxCharacteristic->setValue(&txValue, 1);
        pTxCharacteristic->notify();
        txValue++;
    delay(10); // bluetooth stack will go into congestion, if too many packets are sent
  }

    // disconnecting
    if (!deviceConnected && oldDeviceConnected) {
        delay(500); // give the bluetooth stack the chance to get things ready
        pServer->startAdvertising(); // restart advertising
        Serial.println("start advertising");
        oldDeviceConnected = deviceConnected;
    }
    // connecting
    if (deviceConnected && !oldDeviceConnected) {
    // do stuff here on connecting
        oldDeviceConnected = deviceConnected;
    }
}
