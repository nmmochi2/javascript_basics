const numbers = [1, 2, -1, 3];

// Every
const allPositive  = numbers.every(value => value > 0);

// Some
const atLeaseOnePositive = numbers.some(value => value > 0);

console.log(allPositive, atLeaseOnePositive);