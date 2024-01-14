// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
function DaysToWeeksAndDays(days: number): string {
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    return `${weeks} weeks and ${remainingDays} days`;
}

// Example:
const inputDays = 17;
console.log(`${inputDays} days is ${DaysToWeeksAndDays(inputDays)}`);
