// question
// Given two arrays (arr1) and (arr2) return the union, intersection, difference and symmetric difference of the two arrays.

// Inputs: arr1 = [1, 2, 3] and arr2 = [2, 3, 4]

// union(arr1, arr2) - Returns [1, 2, 3, 2, 3, 4]

// intersection(arr1, arr2) - Returns [2, 3]

// difference(arr1, arr2) - Returns [1]

// difference(arr2, arr1) - Returns [4]

// symmetricDifference(arr1, arr2) - Returns [1, 4]
function union(arr1, arr2) {
  return arr1.concat(arr2);
}
function intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}
function difference(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

function symmetricDifference(arr1, arr2) {
  let arr1Diff = difference(arr1, arr2);
  let arr2Diff = difference(arr2, arr1);

  return union(arr1Diff, arr2Diff);
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
console.log("Union:", union(arr1, arr2));
console.log("Intersection:", intersection(arr1, arr2));
console.log("Difference (arr1 - arr2):", difference(arr1, arr2));
console.log("Difference (arr2 - arr1):", difference(arr2, arr1));
console.log("Symmetric Difference:", symmetricDifference(arr1, arr2));
