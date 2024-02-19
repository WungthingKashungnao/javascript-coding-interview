// Question
// Given an array (names) of objects where each object contains the firstname and lastname of a person, return an array that contains the fullname of each person.

// Test Case

// function fullNames(names) {

// }

// Input: names = [{firstname: 'Bruce', lastname: 'Wayne'}, {firstname: 'Clark', lastname: 'Kent'}]

// fullNames(names) - Returns ['Bruce Wayne', 'Clark Kent']
function fullNames(names) {
  let fullNameArray = [];
  for (let i = 0; i < names.length; i++) {
    let fullName = names[i].firstname + " " + names[i].lastname;
    fullNameArray[i] = fullName;
  }
  return fullNameArray;
}

names = [
  { firstname: "Bruce", lastname: "Wayne" },
  { firstname: "Clark", lastname: "Kent" },
];
console.log(fullNames(names));
