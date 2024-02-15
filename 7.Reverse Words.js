// question
// Given an input string (str), reverse the string word by word.

// Note:

// 1. Your reversed string should not contain leading or trailing spaces

// 2. You need to reduce multiple spaces between two words to a single space in the reversed string.

// Test Case

// function reverseWords (str) {

// }

// reverseWords('Hello World') - Returns 'World Hello'

// reverseWords(' This is  a  test string ') - Returns 'string test a is This'
function reverseString(str) {
  let string = str.trim().split(/\s+/);
  let newStr = "";
  for (let i = string.length - 1; i >= 0; i--) newStr += string[i] + " ";
  console.log(newStr);
}
reverseString("Hello there     How are You");
