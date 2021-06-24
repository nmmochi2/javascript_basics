const first = [{ id: 1 }];
const second = [2, 3, 4, 5, 6, 7];

const combined = first.concat(second);
first[0].id = 10;

const slice = combined.slice(2, 4);

console.log(combined);
console.log(slice);

// Spread operator
const third = [...first, 'test', ...second, 'dummy'];
console.log(third);