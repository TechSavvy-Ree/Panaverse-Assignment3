"use strict";
// Write a program that checks if the given year is leap year or not.
let givenYear = 2024;
// let isLeapYear = (givenYear % 4 == 0 && (givenYear % 100 !== 0) || );
let isLeapYear = (givenYear % 400 == 0);
if (isLeapYear) {
    console.log(`${givenYear} is a leap year.`);
}
else {
    console.log(`${givenYear} is not a leap year.`);
}
