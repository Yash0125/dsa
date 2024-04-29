// Example 1:
// Input Format: N = 3, k = 5, array[] = {2,3,5}
// Result: 2
// Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

// Example 2:
// Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
// Result: 3
// Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.

// Example 3:
// Input Format
// : N = 3, k = 1, array[] = {-1, 1, 1}
// Result:
//  3
// Explanation:
//  The longest subarray with sum 1 is {-1, 1, 1}. And its length is 3.

let a = [2, 3, 5, 1, 9];
let k = 10;

// Brute force

function getLongestSubarray(a, k) {
  let maxLen = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 1; j < a.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += a[k];
      }
      if (sum === k) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
}

console.log(getLongestSubarray(a, k));

// TC : O(N^3)
// SC : O(1)

// Better approach

function getLongestSubarrayBetter(a, k) {
  let n = a.length; // size of the array

  let preSumMap = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    // calculate the prefix sum till index i
    sum += a[i];

    // if the sum = k, update the maxLen
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }

    // calculate the sum of remaining part i.e. x - k
    let rem = sum - k;

    // calculate the length and update maxLen
    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem);
      maxLen = Math.max(maxLen, len);
    }

    // update the map checking the conditions
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, i);
    }
  }

  return maxLen;
}

console.log(getLongestSubarrayBetter(a, k));

// Only for the positives, not for the negatives, so example 3 will not be covered in this.

// Optimize for Positive

function getLongestSubarrayOptimize(a, k) {
  let left = 0;
  let right = 0;
  let sum = a[0];
  let maxLen = 0;

  let n = a.length;

  while (right < n) {
    while (left <= right && sum > k) {
      sum -= a[left];
      left++;
    }
    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    right++;
    if (right < n) sum += a[right];
  }
  return maxLen;
}

console.log(getLongestSubarrayOptimize(a, k));

// TC : O(2n)
// SC : O(1)
