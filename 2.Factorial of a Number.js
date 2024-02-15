// question
// Give an integer (num), find the factorial of that integer.

// If the integer is represented as num, the factorial of num is the product of all positive integers less than or equal to num.

// Example

// Factorial of 4 = 4 * 3 * 2 * 1

// Factorial of 4 = 24

// Test Case

// function factorial(num) {

// }

// factorial(0) - Returns 1 (We're not going to understand the math behind this)

// factorial(1) - Returns 1

// factorial(4) - Returns 24

// factorial(5) - Returns 120
function fact(num) {
  if (num <= 1) return 1;
  return num * fact(num - 1);
}
console.log(fact(5));
