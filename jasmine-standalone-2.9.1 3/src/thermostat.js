const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;
const POWER_MAX_TEMP = 25;
const NORMAL_MAX_TEMP = 32;

function Thermostat () {
  this.temp = DEFAULT_TEMP;
  this.mode = true;
};

Thermostat.prototype = {

    up: function() {
      if(this.temp >= this._maxTemp()) {throw new Error("maximum tempreture reached")}
      this.temp++; },

    down: function() {
       this._minTemp();
       this.temp--;
    },

    powerSaving: function(mode) {
       this.mode = mode;
    },

    reset: function() {
      this.temp = DEFAULT_TEMP
    },

    usage: function(){
       if(this.temp < 18) {return "low-usage"}
       else {return "medium-usage"};
    },

    _minTemp: function() {
      if (this.temp <= MIN_TEMP) {throw new Error("minimum tempreture reached")}
    },
    _maxTemp: function() {
      return (this.mode) ? POWER_MAX_TEMP : NORMAL_MAX_TEMP;
    }
};
