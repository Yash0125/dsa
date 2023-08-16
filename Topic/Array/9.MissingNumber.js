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

var missingNumber = function(nums) {
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

