// question
// Given a nested array (arr), return the flattened array.

// Test Case

// function flattenArray(arr) {

// }

// input: arr = [1, [2], [3, [[4]]]]

// flattenArray(arr) - Returns [1, 2, 3, 4]
let flattenArray = (arr) => {
  let result = [];
  function flattenArrayHelper(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenArrayHelper(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  }
  flattenArrayHelper(arr);
  return result;
};
console.log(flattenArray([1, [2], [3, [[4]]]]));
