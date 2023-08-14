const nums = [7, 2, 3];
const target = 9;

var twoSum = function (nums, target) {
  var obj = {};
  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];

    if (obj[target - n] >= 0) {
      console.log([obj[target-n],i])
    }else{
      obj[n]=i;
    }
  }
};

console.log(twoSum(nums,target))