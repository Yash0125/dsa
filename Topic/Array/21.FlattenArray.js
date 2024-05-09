const nums = [1, 2, [3, 4, [5, 6], 7], 8];

function flattenArray(nums) {
  let flatArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (Array.isArray(nums[i])) {
      flatArr = flatArr.concat(flattenArray(nums[i]));
    } else {
      flatArr.push(nums[i]);
    }
  }
  return flatArr;
}

console.log(flattenArray(nums));

// Other way witht concat

const a = [1, 2, 3, [4, [5, 6]], 7, 8];

let temp = [];
function flattenArray2(a, temp) {
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      flattenArray(a[i], temp);
    } else {
      temp.push(a[i]);
    }
  }
  return temp;
}

console.log(flattenArray2(a, temp));

// other type  of quetion but method is same

// Write a function to return the count of numbers in an Array | MakeMyTrip Frontend Interview Question
// In this question, the candidate needs to implement a function that returns the count of
//  numbers in a provided array.

// The array might contain other data types and nested arrays too.

// Many users have reported that this question was asked in the frontend interview process of
// companies like MakeMyTrip.

// Syntax
// countNumbers(collection);
// Arguments
// collection (Array): The input array.
// Return
// the total count of numbers inside the array.
// Example

// countNumbers([ 1,"2", [3,4,[5]], function(){}, 8, 9 ]);
// // 6

// countNumbers([]);
// // 0

let collection = [1, "2", [3, 4, [5]], function () {}, 8, 9];

function countNumbers(collection) {
  // write your solution below

  let count = 0;
  if (!collection.length) {
    return count;
  }
  for (let i = 0; i < collection.length; i++) {
    if (typeof collection[i] === "number") {
      count += 1;
    } else if (Array.isArray(collection[i])) {
      count += countNumbers(collection[i]);
    }
  }

  return count;
}

console.log(countNumbers(collection));
