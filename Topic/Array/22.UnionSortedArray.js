// Union of 2 sorted arrays

let arr1 = [1, 1, 2, 3, 4, 5];
let arr2 = [2, 3, 4, 4, 5];

// expected op =[1,2,3,4,5,6]

// Brute force

function UnionSortedArray(arr1, arr2) {
  const set = new Set();
  const union = [];

  for (let num of arr1) {
    set.add(num);
  }

  for (let num of arr2) {
    set.add(num);
  }

  for (let num of set) {
    union.push(num);
  }

  return union;
}

console.log(UnionSortedArray(arr1, arr2));
