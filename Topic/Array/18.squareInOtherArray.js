// Check arr1 element squre present in arr2 element. if exist , true otherwise false

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 9, 4, 16];

var squareInArray1 = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    let isSquare = false;

    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] * arr1[i] === arr2[j]) {
        isSquare = true;
      }

      if (j === arr2.length - 1) {
        if (!isSquare) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(squareInArray1(arr1, arr2));

// TC :  O(n ^ 2)

var squareInArray2 = (arr1, arr2) => {
  let setOfarr2 = new Set(arr2);
  for (let i = 0; i < arr1.length; i++) {
    if (!setOfarr2.has(arr1[i] * arr1[i])) {
      return false;
    }
  }
  return true;
};

console.log(squareInArray2(arr1, arr2));

// TC :  O(n)
