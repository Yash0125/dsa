const arr = [10, 22, 12, 3, 0, 6];

// Write a program to print all the LEADERS in the array.
// An element is a leader if it is greater than all the elements to its right side.
// And the rightmost element is always a leader.

// For example:

// Input: arr[] = {16, 17, 4, 3, 5, 2},
// Output: 17, 5, 2

// Input: arr[] = {1, 2, 3, 4, 5, 2},
// Output: 5, 2

// Brute force

var leaderInArray = function (arr) {
  let n = arr.length;
  let leader;
  let ans = [];
  for (let i = 0; i < n; i++) {
    leader = true;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        leader = false;
        break;
      }
    }
    if (leader === true) {
      ans.push(arr[i]);
    }
  }
  return ans;
};

console.log(leaderInArray(arr));

// TC : O(n^2)
// SC : O(n) : for worst case

// Optimize

var leaderInArrayOptimiz = function (arr) {
  let n = arr.length;
  let ans = [];
  let max = Number.NEGATIVE_INFINITY;

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > max) {
      ans.push(arr[i]);
    }
    max = Math.max(arr[i], max);
  }
  return ans.sort((a, b) => a - b);
};

console.log(leaderInArrayOptimiz(arr));

// TC : O(nlogn)
// SC : O(n)

// Try leetcode 1299 -> similar
