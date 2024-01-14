// Write a program that calculates the percentage.
function calculatePercentage(value: number, total: number): number {
    return (value / total) * 100;
}

// Example:
const value = 75;
const total = 100;
const percentage = calculatePercentage(value, total);
console.log(`${value} is ${percentage}% of ${total}`);
