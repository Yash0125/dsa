// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

let nums = [1, 1, 0, 1, 1, 1];

var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      maxCount = Math.max(count, maxCount); // edge case for [1,1,1,0,1,1,0,1]
    } else {
      count = 0;
    }
  }
  return maxCount;
};

console.log(findMaxConsecutiveOnes(nums));
