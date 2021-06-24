myArr = [ 0, 12, null, undefined, 'nikunj', '', false, true, 31 ];

console.log(countTruthy(myArr));

function countTruthy(array) {
    let truethy = 0;

    for (let item of array) 
        if (item) truethy++;

    return truethy;
}