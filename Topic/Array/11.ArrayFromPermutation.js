// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]


// I tried first for loop and nums[i]=nums[nums[i]] but it will not worked because it will also shown a recent store value. we can by 2 method 1 is map other is make 1 array with that array length and store newArray[i]=nums[numsi]

let nums = [0, 2, 1, 5, 3, 4];

var buildArray = function (nums) {
  return nums.map((num) => nums[num]);
};

console.log(buildArray(nums));

// method - 2

var buildArray2 = function(nums) {
    let output=new Array(nums.length)
    for(let i=0;i<nums.length;i++){
        output[i]=nums[nums[i]]
    }
    return output
};

console.log(buildArray2(nums));