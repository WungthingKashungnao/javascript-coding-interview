// question
// Given two numbers min and max, find all the prime numbers in the range of min to max. (min and max included)

// Test Case

// function printPrime (min, max) {

// }

// printPrime(0, 20) - Returns 2 3 5 7 11 13 17 19
let primeArr = [];
function isPrime(n) {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) return false;
  }
  primeArr.push(n);
}

function prime(min, max) {
  for (let i = min; i < max; i++) {
    if (i < 2) continue;
    isPrime(i);
  }
}

prime(0, 100);
console.log(primeArr);
