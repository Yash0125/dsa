// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

let nums = [0, 1, 0, 3, 12];

function moveZeros(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}

console.log(moveZeros(nums));

// time O(n+x) => here x is zero numbers
// SC O(1)

// Optimized

function moveZerosOptimized(nums) {
  let j = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      j = i;
      break;
    }
  }
  if (j === -1) return nums;

  for (let i = j + 1; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return nums;
}

console.log(moveZerosOptimized(nums));

// TC O(n)
// SC O(1)
