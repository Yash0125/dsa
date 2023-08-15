function missingNumber(nums) {
    const n = nums.length;
    let expectedSum = 0;
    let actualSum = 0;

    // Calculate the expected sum and the actual sum of the numbers
    for (let i = 0; i <= n; i++) {
        expectedSum += i;
        actualSum += nums[i] || 0; // Handle the case when nums[i] is undefined (out of bounds)
    }

    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}

// Example usage
const nums1 = [3, 0, 1];
console.log(missingNumber(nums1)); // Output: 2

const nums2 = [0, 1];
console.log(missingNumber(nums2)); // Output: 2


