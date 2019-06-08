/* This file will contain the PlaybulbCandle Class that will be used to
 * interact with the PLAYBULB Candle Bluetooth device. */
    let encoder = new TextEncoder('utf-8');
    let decoder = new TextDecoder('utf-8');
  
    const CANDLE_SERVICE_UUID = 6E400001;
  
    const Characteristics1 = 6E400002;
    const CANDLE_COLOR_UUID = 0xFFFC;
    const CANDLE_EFFECT_UUID = 0xFFFB;
  
    class PlaybulbCandle {
      constructor() {
        this.device = null;
        this._isEffectSet = false;
      }
      connect() {
        let options = {filters:[{services:[ CANDLE_SERVICE_UUID ]}],
                       optionalServices: ['battery_service']};
        return navigator.bluetooth.requestDevice(options)
        .then(device => {
          this.device = device;
          return device.gatt.connect();
        });
      }
      setDeviceName(name) {
        return this.device.gatt.getPrimaryService(CANDLE_SERVICE_UUID)
        .then(service => service.getCharacteristic(Characteristics1))
        .then(characteristic => {
          let encoder = new TextEncoder('utf-8');
          return characteristic.writeValue(encoder.encode(name));
        });
      }
      setColor(r, g, b) {
        return Promise.resolve()
        .then(() => {
          if (!this._isEffectSet) {
            return Promise.resolve();
          }
          // Turn off Color Effect first.
          let data = new Uint8Array([0x00, r, g, b, 0x05, 0x00, 0x01, 0x00]);
          return this.device.gatt.getPrimaryService(CANDLE_SERVICE_UUID)
          .then(service => service.getCharacteristic(CANDLE_EFFECT_UUID))
          .then(characteristic => characteristic.writeValue(data));
        })
        .then(() => {
          let data = new Uint8Array([0x00, r, g, b]);
          return this.device.gatt.getPrimaryService(CANDLE_SERVICE_UUID)
          .then(service => service.getCharacteristic(CANDLE_COLOR_UUID))
          .then(characteristic => characteristic.writeValue(data))
          .then(() => [r,g,b]);
        });
      }
      setCandleEffectColor(r, g, b) {
        let data = new Uint8Array([0x00, r, g, b, 0x04, 0x00, 0x01, 0x00]);
        return this.device.gatt.getPrimaryService(CANDLE_SERVICE_UUID)
        .then(service => service.getCharacteristic(CANDLE_EFFECT_UUID))
        .then(characteristic => characteristic.writeValue(data))
        .then(_ => {
          this._isEffectSet = true;
          return [r,g,b];
        });
      }
      setFlashingColor(r, g, b) {
        let data = new Uint8Array([0x00, r, g, b, 0x00, 0x00, 0x1F, 0x00]);
        return this.device.gatt.getPrimaryService(CANDLE_SERVICE_UUID)
        .then(service => service.getCharacteristic(CANDLE_EFFECT_UUID))
        .then(characteristic => characteristic.writeValue(data))
        .then(_ => {
          this._isEffectSet = true;
          return [r,g,b];
        });
      }
      setPulseColor(r, g, b) {
        // We have to correct user color to make it look nice for real...
        let newRed = Math.min(Math.round(r / 64) * 64, 255);
        let newGreen = Math.min(Math.round(g / 64) * 64, 255);
        let newBlue = Math.min(Math.round(b / 64) * 64, 255);
        let data = new Uint8Array([0x00, newRed, newGreen, newBlue, 0x01, 0x00, 0x09, 0x00]);
        return this.device.gatt.getPrimaryService(CANDLE_SERVICE_UUID)
        .then(service => service.getCharacteristic(CANDLE_EFFECT_UUID))
        .then(characteristic => characteristic.writeValue(data))
        .then(_ => {
          this._isEffectSet = true;
          return [r,g,b];
        });
      }
      setRainbow() {
        let data = new Uint8Array([0x01, 0x00, 0x00, 0x00, 0x02, 0x00, 0x01, 0x00]);
        return this.device.gatt.getPrimaryService(CANDLE_SERVICE_UUID)
        .then(service => service.getCharacteristic(CANDLE_EFFECT_UUID))
        .then(characteristic => characteristic.writeValue(data))
        .then(_ => {
          this._isEffectSet = true;
          return [r,g,b];
        });
      }
      setRainbowFade() {
        let data = new Uint8Array([0x01, 0x00, 0x00, 0x00, 0x03, 0x00, 0x26, 0x00]);
        return this.device.gatt.getPrimaryService(CANDLE_SERVICE_UUID)
        .then(service => service.getCharacteristic(CANDLE_EFFECT_UUID))
        .then(characteristic => characteristic.writeValue(data))
        .then(_ => {
          this._isEffectSet = true;
          return [r,g,b];
        });
      }
    }
  
    window.playbulbCandle = new PlaybulbCandle();
  
    window.playbulbCandle.connect();
    window.playbulbCandle.setDeviceName(1);