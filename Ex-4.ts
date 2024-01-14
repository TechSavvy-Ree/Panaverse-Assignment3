// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
// let productPrice = 150;
let productPrice = 40
if (productPrice > 100) {
    productPrice *= 0.9; // 10% discount for price > $100
} else {
    productPrice *= 0.95; // 5% discount for price <= $100
}

console.log(`Discounted price: $${productPrice}`);
// ----------------------------------------\By using function\----------------------------------
// function calculateDiscount(price: number): number {
//     if (price > 100) {
//         return price * 0.1; // 10% discount for price > $100
//     } else {
//         return price * 0.05; // 5% discount for price <= $100
//     }
// }

// // Example:
// const price1 = 90;
// const discountAmount = calculateDiscount(price1);
// console.log(`Discount for a product with price $${price1} is $${discountAmount}`);

