// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
let currentTemperature = 8;

if (currentTemperature < 10) {
    console.log("It's cold. Wear warm clothes.");
} else if (currentTemperature >= 10 && currentTemperature < 20) {
    console.log("It's cool. A light jacket might be needed.");
} else {
    console.log("It's warm. Enjoy the weather!");
}
