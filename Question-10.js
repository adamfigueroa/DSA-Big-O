// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

// it looks like it takes in a number value and determines if it is a prime number or not. the Big O would be Constant O(n) because it scales with the number argument, the higher it is, the more calculations have to take place.