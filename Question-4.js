// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// Linear O(n), n because you are looping through each item (which would scale depending on the size of array) but only executing one operation.