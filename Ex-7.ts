// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
let number:number=15;
// let number:number=25; (It is only divisble by 5)
// let number:number=9; (It is only divisble by 3)
// let number:number=119; (It is not divisble by 3 and 5)
if(number%3==0 && number%5==0)
console.log(`${number} is divislbe by both 3 and 5`);
else if (number % 3 === 0) {
    console.log(`${number} is only divisible by 3`);
}
else if(number%5==0){
    console.log(`${number} is only divisible by 5`);
}
else {
    console.log(`${number} is not divisible by 3 and 5`);
}