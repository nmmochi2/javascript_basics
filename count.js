const numbers = [1, 2, 3, 4, 2];

const count = countOccurenece(numbers, 2);
console.log(count);

function countOccurenece(array, searchElement) {
    return array.reduce((acc, current) => current === searchElement ? acc + 1 : acc + 0, 0);
}