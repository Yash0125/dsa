// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

let nums = [-1,0,3,5,9,12]
let target=9

var search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]===target) return i
    }
    return -1
};

console.log(search(nums,target))