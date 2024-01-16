//  Write a JavaScript function that takes an array of integers as input and finds and
// displays the element(s) with the maximum count. The function should output both
// the maximum count and the corresponding element(s). If there are multiple elements
// with the same maximum count, all of them should be included in the output.

// Input : [1, 2, 3, 4, 5, 1, 2, 3, 3, 2];
// output : { '1': 2, '2': 3, '3': 3, '4': 1, '5': 1 }
//          2, 3 have the maximum count (3)

let array = [1, 2, 3, 4, 5, 1, 2, 3, 3, 2];

function findeCharCount(array) {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  console.log(obj);
  let maxCount = 0;
  let maxKeys = [];

  for (let key in obj) {
    if (obj[key] > maxCount) {
      maxCount = obj[key];
      maxKeys = [key];
    } else if (obj[key] === maxCount) {
      maxKeys.push(key);
    }
  }
  console.log(`${maxKeys.join(", ")} have the maximum count (${maxCount})`);
}

console.log(findeCharCount(array));
