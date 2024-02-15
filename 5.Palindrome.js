// question
// Given a string (str), determine if it is a palindrome.

// Note: A plaindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam.

// Test Case

// function isPalindrome (str) {

// }

// isPalindrome('racecar') - Returns true

// isPalindrome('race') - Returns false

function palindrome(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) string += str[i];

  str.toLowerCase() === string.toLowerCase()
    ? console.log(`${str} is a palindrome`)
    : console.log(`${str} is not a palindrome`);
}
palindrome("racecar");
