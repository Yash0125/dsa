// Input :  arr = [1,2,3,4,5]
//          size = 1
// output : [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]

// Input :  arr = [1,2,3,4,5]
//          size = 2
// output : [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

// Input :  arr = [1,2,3,4,5]
//          size = 3
// output : [ [ 1, 2, 3 ], [ 4, 5 ] ]

let arr = [1, 2, 3, 4, 5];
let size = 2;

function chunk(arr, size) {
  let result = [];
  let minAns = [];
  for (let i = 0; i < arr.length; i++) {
    minAns.push(arr[i]);
    if (minAns.length === size || i === arr.length - 1) {
      result.push([...minAns]);
      minAns.length = 0;
    }
  }
  return result;
}

console.log(chunk(arr, size));
