const nums = [1, 2, [3, 4, [5, 6], 7], 8];

function flattenArray(nums) {
  let flatArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (Array.isArray(nums[i])) {
      flatArr = flatArr.concat(flattenArray(nums[i]));
    } else {
      flatArr.push(nums[i]);
    }
  }
  return flatArr;
}

console.log(flattenArray(nums));
