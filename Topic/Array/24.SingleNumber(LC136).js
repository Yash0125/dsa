// 136. Single Number
// Easy
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

let nums = [4, 1, 2, 1, 2];

// Brute force

var singleNumber = function (nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
};

console.log(singleNumber(nums));

// TC : O(n) + O(n/2 +!)
// SC: O(n/2 + 1)

// optimized

var singleNumberOptimized = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};

console.log(singleNumberOptimized(nums));

// TC : O(n)
// SC: O(1)
