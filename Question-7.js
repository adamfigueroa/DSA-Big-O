// What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
console.log(compute(8))

// This function is the fibonacci sequence,  which takes in a number argument and then prints fibonacci numbers by adding the two numbers previous together. The complexity would be Linear O(n) because this would perform as many operations as given by the num argument.