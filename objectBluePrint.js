// Factory Function
// Camel naming convention
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1);


// Constructor Function
// Pascal naming convention
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle2 = new Circle(2);
console.log(circle2);