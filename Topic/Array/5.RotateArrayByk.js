// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


// brute force approach

let nums = [1,2,3,4,5,6,7];
let k=3;


var rotate = function(nums, k) {
  let size=nums.length;
  if(k>size){
    k=k%size;
  }
  const rotated=nums.splice(size-k,size)
  nums.unshift(...rotated)
  return nums;
    
};

console.log(rotate(nums, k))

function rotateArrayOptimised(nums, k) {
  let size = nums.length;

  if (size > k) {
    k = k % size;
  }

  reverse(nums, 0, nums.length - 1); // O(n)
  reverse(nums, 0, k - 1); // O(k)
  reverse(nums, k, nums.length - 1); // O(n-k)

  return nums;
}


function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}


console.log(rotateArrayOptimised(nums, k))