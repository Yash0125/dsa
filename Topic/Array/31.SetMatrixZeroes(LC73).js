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

// Better aproach

var setZeroesBetter = function (matrix) {
  let n = matrix.length; // Number of rows
  let m = matrix[0].length; // Number of columns

  // Arrays to mark which rows and columns need to be set to zero
  let row = new Array(n).fill(0);
  let col = new Array(m).fill(0);

  // Traverse the matrix to find zeros and mark the respective row and column
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        row[i] = 1; // Mark the row
        col[j] = 1; // Mark the column
      }
    }
  }

  // Traverse the matrix again and set the elements to zero if their row or column is marked
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0; // Set the element to zero
      }
    }
  }

  return matrix; // Return the modified matrix
};

console.log(setZeroesBetter(matrix)); // Output the modified matrix

// TC : O(2*n*m) 
// SC : O(n) + O(m)

var setZeroesOptimize = function (matrix) {
  // Get the dimensions of the matrix (number of rows and columns).
  let n = matrix.length;
  let m = matrix[0].length;

  // Flag to track if the first column needs to be set to zeros.
  let col0 = 1;  // Initialize to 1, assuming no zeros in the first column yet.

  // Step 1: Traverse the matrix and mark the first row and column
  //         accordingly if a zero is encountered.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        // Mark the first element in the current row as 0.
        matrix[i][0] = 0;

        // If this zero is not in the first column, mark the first element
        // in the current column as 0 (except for the first row, which
        // will be handled later).
        if (j !== 0) {
          matrix[0][j] = 0;
        } else {
          // If a zero is found in the first column, set the col0 flag to 0
          // to indicate that the entire first column needs to be set to zeros
          // later. This is because setting the first element in the first
          // column to 0 would overwrite the marker for the entire row.
          col0 = 0;
        }
      }
    }
  }

  // Step 2: Set elements to zero based on the markings in the first row and column.
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Step 3: Handle the first row and column (if necessary).
  if (matrix[0][0] === 0) {
    // Set the entire first row to zeros.
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }

  if (col0 === 0) {
    // Set the entire first column to zeros.
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};

console.log(setZeroesOptimize(matrix));

// TC :  O(2*(N*M))
// SC : O(1)
