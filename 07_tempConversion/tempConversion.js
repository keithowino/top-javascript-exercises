/*

TODO: PSEUDOCODE
*:  C to F - (C * 9 / 5) + 32
*:  F to C - (F - 32) * 5 / 9

*/ 

const convertToCelsius = function(fahrenheit) {
  let output = parseFloat(((fahrenheit - 32) * 5 / 9).toFixed(1));
  return output;
};

const convertToFahrenheit = function(celsius) {
  let output = parseFloat(((celsius * 9 / 5) + 32).toFixed(1));
  return output;
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(73.2));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
