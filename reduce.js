const numbers = [1, 2, -1, 3];

let sum1 = 0;
for(let num of numbers)
    sum1 += num;
console.log(sum1);

let sum2 = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue, // Argument 1 for reduce method
    1                                                          // Argument 2 for reduce method: Initial value of accumulator
);
console.log(sum2);