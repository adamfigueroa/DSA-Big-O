// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.
// Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.
// Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

// 1. Counting Sheep
// Recursive time complexity: O(n)
// Iterative time complexity: O(n)

function countSheep(num) {
  for (let i = num; i > 0; i--) {
    console.log(`Sheep ${i} has jumped over the fence`);
  }
  console.log('All the sheep escaped!');
}
console.log('counting sheep: ', countSheep(3));

// 2. Power Calculator
// Recursive time complexity: O(n)
// Iterative time complexity: O(n)

function powerCalculator(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp < 0) {
    return 'exponent has to be >= 0';
  }
  let product = 1;
  for (let i = 0; i < exp; i++) {
    product *= base;
  }
  return product;
}
console.log('power calculator: ', powerCalculator(5, 2));

// 3. Reverse String
// Recursive time complexity: O(n)
// Iterative time complexity: O(n)

function stringReverser(str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str.charAt(i);
  }
  return reversedString;
}
console.log('reverse string: ', stringReverser('hello'));

// 4. nth Triangular Number
// Recursive time complexity: O(n)
// Iterative time complexity: O(n)

function triangulator2000(n) {
  if (n < 0) return 'Value: "n" needs to be >= 0';
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += i;
  }
  return count;
}
console.log('nth Triangular Number: ', triangulator2000(2));

// 5. String Splitter
// Recursive time complexity: O(n)
// Iterative time complexity: O(n)

function strSplitter(str, split) {
  if (!str.includes(split)) {
    return str;
  }
  const result = str.split(split);

  return result;
}
console.log('string splitter: ', strSplitter('02/20/2020', '/'));

// 6. Fibonacci
// Recursive time complexity: O(n)
// Iterative time complexity: O(n)

function fibonacci(number) {
  let firstNum = 1;
  let secondNum = 0;
  let fib = null;
  while (number > 0) {
    fib = firstNum;
    firstNum = firstNum + secondNum;
    secondNum = fib;
    number--;
  }
  return secondNum;
}
console.log('fibonacci: ', fibonacci(7));

// 7. Factorial
// Recursive time complexity: O(n)
// Iterative time complexity: O(n)

function factorial(number) {
  let result = number;
  for (let i = number - 1; i > 0; i--) {
    result *= i;
  }
  return result;
}
console.log('factorial: ', factorial(5));
