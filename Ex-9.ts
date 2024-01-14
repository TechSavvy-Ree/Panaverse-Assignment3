// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

let inputNumber = 3;  // input=3,    Output='Tuesday'

// let inputNumber = 8; ( it prints else statement " Invalid input")

if ( inputNumber>= 1 && inputNumber <= 7) {
    if (inputNumber === 1) {
        console.log("Day of the week: Sunday");
    } else if ( inputNumber=== 2) {
        console.log("Day of the week: Monday");
    } else if (inputNumber === 3) {
        console.log("Day of the week: Tuesday");
    } else if (inputNumber === 4) {
        console.log("Day of the week: Wednesday");
    } else if (inputNumber === 5) {
        console.log("Day of the week: Thursday");
    } else if (inputNumber === 6) {
        console.log("Day of the week: Friday");
    } else {
        console.log("Day of the week: Saturday");
    }
} 
    else {
    console.log("Invalid input. Please enter a number between 1 and 7.");
}

