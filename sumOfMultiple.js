console.log(sum(10));

function sum(limit) {
    n3 = Math.floor(limit / 3);
    n5 = Math.floor(limit / 5);

    return (3 * (n3 * (n3+1) / 2)) + (5 * (n5 * (n5 + 1) / 2)); 
}