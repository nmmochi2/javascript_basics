// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));
console.log(fizzBuzz(''));
console.log(fizzBuzz('abc'));
console.log(fizzBuzz('123'));
console.log(fizzBuzz(false));

function fizzBuzz(input) {
    return (typeof(input) !== 'number') ? NaN :
            (input % 3 === 0 && input % 5 === 0) ? 'FizzBuzz' : 
            (input % 3 === 0) ? 'Fizz' : 
            (input % 5 === 0) ? 'Buzz' : 
            input; 
}