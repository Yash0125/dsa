//left rotate by one array

// Input : [1,2,3,4,5]
// Output : [2,3,4,5,1]

let arr = [1, 2, 3, 4, 5];

var leftRotate = function (arr) {
  let temp = arr[0];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = temp;
  return arr;
};


console.log(leftRotate(arr));
