// question
// Given an array (arr) of elements, one element in the array occurs twice. Find the element.

// Test Case

// function findDuplicate(arr) {

// }

// input: arr = [2,4,6,8,2]

// findDuplicate(arr) - Returns 2
let findDuplicate = (arr) => {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return arr[i];
    } else {
      seen[arr[i]] = true;
    }
  }
  return null;
};
console.log(findDuplicate([2, 4, 6, 8, 2]));
