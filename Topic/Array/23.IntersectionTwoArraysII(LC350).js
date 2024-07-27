// 350. Intersection of Two Arrays II
// Easy
// Topics
// Companies
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];

// brute force

var intersect = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  let ans = [];
  let visited = new Array(nums2.length).fill(0);
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      if (nums1[i] === nums2[j] && visited[j] === 0) {
        ans.push(nums2[j]);
        visited[j] = 1;
        break;
      } else if (nums2[j] > nums1[i]) {
        break;
      }
    }
  }
  return ans;
};

console.log(intersect(nums1, nums2));

// TC : O(n1*n2)
// SC : O(n2)

// optimized using 2 pointer

var intersectOptimized = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  let i = 0;
  let j = 0;
  let ans = [];

  while (i < n1 && j < n2) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      ans.push(nums1[i]);
      i++;
      j++;
    }
  }
  return ans;
};

console.log(intersectOptimized(nums1, nums2));

// TC : O(n1 + n2)
// SC : O(1)



let num1 = [1,2,2,3,4,4];
let num2 = [2,2,4,5,5,6,2000];
const intersect = (num1,num2) =>{
    let obj = {}
    for(let i =0;i<num1.length;i++){
        if(obj[num1[i]]){
            obj[num1[i]]++
        }else {
            obj[num1[i]] = 1
        }
    }
    
    let result = [];
    
    for(let j = 0; j<num2.length;j++){
        if(obj[num2[j]]){
            result.push(num2[j]);
            obj[num2[j]]--
        }
    }
    return result
}
console.log(intersect(num1,num2))