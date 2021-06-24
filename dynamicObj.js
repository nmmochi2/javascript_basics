// dynamic nature of an object
const circle = {
    radius: 1
};

circle.color = 'blue';
circle.draw = function() {};

delete circle.color;

console.log(circle);