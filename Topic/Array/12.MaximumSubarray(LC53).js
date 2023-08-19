// Given an integer array nums, find the  subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Brute

let nums = [-2,1,-3,4,-1,2,1,-5,4];

var maxSubArray = function(nums) {
    let maxSum=nums[0];
    for (let i = 0; i < nums.length; i++) {
        let currentSum=0
        for(let j=i; j <nums.length; j++){
            currentSum=currentSum+nums[j]
            if(currentSum > maxSum){
                maxSum=currentSum
              }
        }
    }
    return maxSum
};

console.log(maxSubArray(nums))


// optimize

// Kadane's Algorithm

var maxSubArrayOptimize = function(nums) {
    let sum=0;
    let max=nums[0];

    for (let i = 0; i < array.length; i++) {
        sum += nums[i]
        if(sum > max){
            max = sum
        }
        if(sum < 0){
            sum = 0
        }
    }
    return max
};


console.log(maxSubArrayOptimize(nums))