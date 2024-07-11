// 560. Subarray Sum Equals K
// Medium
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2

// Constraints:

// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

let nums = [1, 1, 1];
let k = 2;

// Brute/better

var subarraySum = function (nums, k) {
  let sum;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
};

console.log(subarraySum(nums, k));

// Optimized

var subarraySumOptimize = function (nums, k) {
  let map = new Map();
  let preSum = 0;
  let count = 0;

  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];
    let remove = preSum - k;
    count += map.get(remove) || 0;
    map.set(preSum, (map.get(preSum) || 0) + 1);
  }
  return count;
};

console.log(subarraySumOptimize(nums, k));
