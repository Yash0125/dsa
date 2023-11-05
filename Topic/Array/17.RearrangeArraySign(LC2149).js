// even length consisting of an equal number of positive and negative integers.

// You should rearrange the elements of nums such that the modified array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Example 1:

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.

let nums = [3, 1, -2, -5, 2, -4];

// brute force approach

var rearrangeArray1 = function (nums) {
  let positive = [];
  let negative = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      positive.push(nums[i]);
    } else {
      negative.push(nums[i]);
    }
  }

  for (let i = 0; i < nums.length / 2; i++) {
    nums[2 * i] = positive[i];
    nums[2 * i + 1] = negative[i];
  }
  return nums;
};

console.log(rearrangeArray1(nums));

// TC = O(n) + O(n)
// SC = O(n)

// optimize approach

var rearrangeArray2 = function (nums) {
  let ans = [];
  let posIndex = 0;
  let negIndex = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      ans[negIndex] = nums[i];
      negIndex += 2;
    } else {
      ans[posIndex] = nums[i];
      posIndex += 2;
    }
  }
  return ans;
};

console.log(rearrangeArray2(nums));

// TC = O(n)
// SC = O(n)
