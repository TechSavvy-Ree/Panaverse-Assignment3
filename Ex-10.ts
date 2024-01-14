/*Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax 
if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax Where the tax amount will be calculated by the amount of bill.*/

let units:number= 250; // Tax = 15%
let unitPrice = 10; // Assuming Rs.10 per unit

let totalBill = units * unitPrice;

if (units > 500) {
    totalBill=totalBill + (totalBill * 0.25); // Add 25% tax for consumption above 500 units
} else if (units > 200) {
    totalBill=totalBill + (totalBill * 0.15); // Add 15% tax for consumption above 200 units
} else if (units > 100) {
    totalBill = totalBill + (totalBill * 0.1); // Add 10% tax for consumption above 100 units
}

console.log(`Total Amount: Rs.${totalBill}`);

