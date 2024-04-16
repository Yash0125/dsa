function missingNumber(nums) {
  const n = nums.length;
  let expectedSum = 0;
  let actualSum = 0;

  // Calculate the expected sum and the actual sum of the numbers
  for (let i = 0; i <= n; i++) {
    expectedSum += i;
    actualSum += nums[i] || 0;
  }

  return expectedSum - actualSum;
}

// Example usage
const nums1 = [3, 0, 1];
console.log(missingNumber(nums1)); // Output: 2

const nums2 = [0, 1];
console.log(missingNumber(nums2)); // Output: 2

// you can also do it with one loop of reduce for nums(given array) and other for loop for

var missingNumber = function (nums) {
  let n = nums.length + 1;
  let expectedTotal = 0;

  let realTotal = nums.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  for (let i = 0; i < n; i++) {
    expectedTotal += i;
  }
  return expectedTotal - realTotal;
};

function missingNumber(a, N) {
  let xor1 = 0;
  let xor2 = 0;

  for (let i = 0; i < N - 1; i++) {
    xor2 = xor2 ^ a[i]; // XOR of array elements
    xor1 = xor1 ^ (i + 1); // XOR up to [1...N-1]
  }
  xor1 = xor1 ^ N; // XOR up to [1...N]

  return xor1 ^ xor2; // the missing number
}

function main() {
  const N = 5;
  const a = [1, 2, 4, 5];
  const ans = missingNumber(a, N);
  console.log("The missing number is:", ans);
}

main();

// TC : O(n)
// SC : O(1)
