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

// TC : O((m+n)log(m+n))
// SC : O(m+n)

// *** optimized ***

function UnionSortedArrayoptimized(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0;
  let j = 0;
  let unionArr = [];

  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      if (unionArr[unionArr.length - 1] !== arr1[i] || unionArr.length === 0)
        // check  last element is same as current and check that array is empty or not
        unionArr.push(arr1[i]);
      i++;
    } else {
      if (unionArr[unionArr.length - 1] !== arr2[j] || unionArr.length === 0)
        unionArr.push(arr2[j]);
      j++;
    }
  }

  // let say second array is exhausted but first one is remaining.

  while (i < n1) {
    if (unionArr[unionArr.length - 1] !== arr1[i] || unionArr.length === 0)
      unionArr.push(arr1[i]);
    i++;
  }

  // let say first array is exhausted but second one is remaining.

  while (j < n2) {
    if (unionArr[unionArr.length - 1] !== arr2[j] || unionArr.length === 0)
      unionArr.push(arr2[j]);
    j++;
  }

  return unionArr;
}

console.log(UnionSortedArrayoptimized(arr1, arr2));

// TC : O(n1 + n2)
// SC : O(n1 + n2)
