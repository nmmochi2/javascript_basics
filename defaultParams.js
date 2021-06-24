function interest(p, r=4.5, n=1) {
    return p * r * n / 100;
}

console.log(interest(10000, 3.5, 5));