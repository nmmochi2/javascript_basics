showPrime(20);

function showPrime(limit) {
    let primeList = [];

    for (let i=2; i<=limit; i++) 
        if (isPrime(i)) 
            console.log(i);
}

function isPrime(number) {
    if (number < 2) 
        return false;
    
    for (let i=2; i*i <= number; i++) 
        if (number % i === 0)
            return false;
        
    return true;
}