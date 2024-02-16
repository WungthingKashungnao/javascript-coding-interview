// // Question
// Given an input string (str), remove all vowels from the string.

// Test Case

// function removeVowels (str) {

// }

// removeVowels('Hello World') - Returns Hll Wrld
function removeVowels(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!"aeiouAEIOU".includes(char)) result += str[i];
  }
  console.log(result);
}
removeVowels("Hello World");
