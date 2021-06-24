// Finding Premitive data
const numbers = [1, 2, 3, 4, 1, 6];

console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(1));


// Finding Reference types
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

console.log(courses.find(course => course.name === 'a'));
console.log(courses.find(course => course.name === 'xyz'));
console.log(courses.findIndex(course => course.name === 'a'));
console.log(courses.findIndex(course => course.name === 'xyz'));