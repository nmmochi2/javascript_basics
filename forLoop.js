// for-in
let person = {
    name: 'Nikunj',
    age: 23
};
for (let key in person) 
    console.log(key, person[key]);

// for-of
let colors = ['red', 'green', 'blur'];
for (let color of colors) 
    console.log(color);

// for-in with arrays
for (let index in colors) 
    console.log(index, colors[index]);


// forEach method
colors.forEach((color, index) => console.log(color, index));