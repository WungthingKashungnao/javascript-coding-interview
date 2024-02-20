// question
// Given a string (str), find the longest word in the string.

// Note: If one more more words have the same length, return the first occuring word of the same length.

// Test Case

// function longestWord (str) {

// }

// longestWord('My name is Wungthing') - Returns 'Wungthing'

// longestWord('Hello world') - Returns 'Hello'
function longestWord(str) {
  let words = str.split(" ");
  let maxLength = 0;
  let currWord = "";
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    currWord = words[i];
    if (currWord.length > maxLength) {
      longestWord = currWord;
      maxLength = currWord.length;
    }
  }
  return longestWord;
}

console.log(longestWord("My name is Wungthing"));
console.log(longestWord("Hello world"));
