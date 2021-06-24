const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// End
const last = numbers.pop(); // [1, 2, 3, 4, 5, 6, 7, 8]

// Begining
const first = numbers.shift(); // [2, 3, 4, 5, 6, 7, 8]

// Middle
numbers.splice(2, 2); // [2, 3, 6, 7, 8]

console.log(numbers);