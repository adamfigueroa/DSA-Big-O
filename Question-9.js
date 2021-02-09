// What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Constant O(1), just picking a random element out of an array and returning it.