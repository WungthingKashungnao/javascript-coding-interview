// question
// Given two strings (str1 and str2), determine if str1 is anagram of str2.

// Note: An anagram is a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

// Test Case

// function isAnagram (str) {

// }

// isAnagram('racecar', 'carrace') - Returns true

// isAnagram('racecar', 'carracr') - Returns false
function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}
console.log(anagram("racecar", "carrac"));
