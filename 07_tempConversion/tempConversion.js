const convertToCelsius = function(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(celcius) {
  return Math.round(((9/5) * celcius + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
