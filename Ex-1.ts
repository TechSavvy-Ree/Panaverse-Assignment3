// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}
function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}
 // Example:
const celsiusTemperature = 25;
const convertedToFahrenheit = celsiusToFahrenheit(celsiusTemperature);
console.log(`${celsiusTemperature}°C is ${convertedToFahrenheit}°F`);

const fahrenheitTemperature = 77;
const convertedToCelsius = fahrenheitToCelsius(fahrenheitTemperature);
console.log(`${fahrenheitTemperature}°F is ${convertedToCelsius}°C`);