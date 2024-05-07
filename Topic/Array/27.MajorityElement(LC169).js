// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

let nums = [3,2,3];

var majorityElement = function(nums) {
    let obj={};
    let threshold = Math.floor(nums.length/2)
    for(let num of nums){
        if(obj[num]){
            obj[num]++
        }else{
            obj[num]=1
        }
    }

    for (let num in obj) {
    if (obj[num] > threshold) {
      return parseInt(num);
    }
  }
};

console.log(majorityElement(nums))

// TC : O(n) + O(n)
// SC : O(n)

// optimized

// Moore's Voting Algorithm - take a look one more time

var majorityElementOptimized = function(nums) {
  let n= nums.length;
  let count = 0;
  let el ;
  
  for (let i = 0; i < n; i++) {
        if (count === 0) {
            count = 1;
            el = nums[i];
        } else if (el === nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    
    let count1 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === el) {
            count1++;
        }
    }

    if (count1 > Math.floor(n / 2)) {
        return el;
    }
    return -1;
}

console.log(majorityElementOptimized(nums))

// TC : O(n)
// SC : O(1)
