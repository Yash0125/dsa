// Recursion
// we have always take care of base case like
// in factorial it is
// if(n===0){
//     return 1
// } and in multiply it is
//  if(arr.length<=0){
//     return 1
// }

function multiply(arr) {
  console.log(arr);
  if (arr.length <= 0) {
    return 1;
  } else return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
}

console.log(multiply([1, 2, 3, 4]));

// factorial
// Ques 1 : Factorial of n
// Input:  n = 5  ----->>>>>  Output: 120

let n = 5;

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(n));

// Ques 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output :

let startNum = 1;
let endNum = 5;

function rangeOfNumber(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    let numbers = rangeOfNumber(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumber(startNum, endNum)); // [1,2,3,4,5]

// rangeOfNumbers(1,5) => [1,2,3,4,5]
// rangeOfNumbers(1,4) => [1,2,3,4]
// rangeOfNumbers(1,3) => [1,2,3]
// rangeOfNumbers(1,2) => [1,2]
// rangeOfNumbers(1,1) => [1]
// rangeOfNumbers(1,0) => []

// Ques 3 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 5  ----->>>>>  Output: 5

let n1 = 5;

function fibonacci(n1) {
  if (n1 <= 1) {
    return n1;
  } else {
    return fibonacci(n1 - 1) + fibonacci(n1 - 2);
  }
}

console.log(fibonacci(n1));

// Ques 4 - Reverse a String
// Input: "hello"  ----->>>>>  Output: "olleh"

let string = "hello";

function reverseString(string) {
  if (string === "") {
    return "";
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

console.log(reverseString(string));

// Ques 5 - Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]

let nums = [1, 2, 3];

var subsets = function (nums) {
  let result = [];
  let temp = [];

  function recursiveSubsets(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    }
    temp.push(nums[i]);
    recursiveSubsets(nums, i + 1);
    temp.pop();
    recursiveSubsets(nums, i + 1);
  }
  recursiveSubsets(nums, 0);
  return result;
};

console.log(subsets(nums));
