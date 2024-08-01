const convertToCelsius = function(fahrenheit) {
  const celsius = (5/9) * (fahrenheit - 32);
  const roundedCelsius = parseFloat(celsius.toFixed(1));
  return roundedCelsius;
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = ((9/5) * celsius) + 32;
  const roundedFahrenheit = parseFloat(fahrenheit.toFixed(1));
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
