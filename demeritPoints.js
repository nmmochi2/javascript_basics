// Speed Limit = 70
// 5 => 1 point
// 12 points => suspended

console.log(checkSpeed(50));
console.log(checkSpeed(70));
console.log(checkSpeed(72));
console.log(checkSpeed(75));
console.log(checkSpeed(80));
console.log(checkSpeed(180));
console.log(checkSpeed(130));

function checkSpeed(speed) {
    if (speed === '' || isNaN(speed))
        return 'Enter correct speed value';
    
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) 
        return 'Ok';
    
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    return points >= 12 ? 'License suspended' : points;
}