// 73. Set Matrix Zeroes

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg

// Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
// https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg

// Brute Force

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

var setZeroes = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        markRow(matrix, n, m, i);
        markCol(matrix, n, m, j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

function markRow(matrix, n, m, i) {
  for (let j = 0; j < m; j++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
}

function markCol(matrix, n, m, j) {
  for (let i = 0; i < n; i++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
}

console.log(setZeroes(matrix));

// TC : (n*m)*(n+m) + (n*m) nealy power of cube
