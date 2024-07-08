// 54. Spiral Matrix

// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var spiralOrder = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let left = 0;
  let right = m - 1;
  let bottom = n - 1;
  let top = 0;
  let ans = [];

  while (top <= bottom && left <= right) {
    // Traverse from left to right
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;

    // Traverse from top to bottom
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    right--;

    // Traverse from right to left, if top and bottom pointers have not crossed
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Traverse from bottom to top, if left and right pointers have not crossed
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }
      left++;
    }
  }

  return ans;
};

console.log(spiralOrder(matrix));
