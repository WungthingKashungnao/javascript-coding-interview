// question
// Give a number n, find the first n elements of the fibonacci seriies.

// Now what is fibonacci series? Well it is a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.

// The first two numbers in the series are 0 and 1.

// Test Case

// function printFibonacci(n) {

// }

// printFibonacci(2) - Returns 0 1

// printFibonacci(7) - Returns 0 1 1 2 3 5 8

function printFibo(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(printFibo(7));
