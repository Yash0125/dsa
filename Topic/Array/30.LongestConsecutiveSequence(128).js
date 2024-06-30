// 128. Longest Consecutive 
// Given an unsorted array of integers nums, return the length of
//  the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Brute force 

// Do with linear search later

// optimized

// let nums = [100,4,200,1,3,2];
let nums = [100,4,200,1,3,2,1,3,2];

var longestConsecutive = function(nums) {
    let longest = 1;
    let lastSmaller = Number.NEGATIVE_INFINITY;
    let countCur = 0;
    let sortNum= nums.sort((a,b)=>a-b);
    for(let i=0;i<sortNum.length;i++){
        if(sortNum[i]-1===lastSmaller){
            countCur+=1;
            lastSmaller = sortNum[i]
        }else if(sortNum[i]!==lastSmaller){
            countCur =1;
            lastSmaller = sortNum[i]
        }
        longest = Math.max(countCur,longest)
    }
    return longest
};

console.log(longestConsecutive(nums))

// Optimized

var longestConsecutiveOptimized = function(nums) {
    let n=nums.length;
    if(n===0) return 0;
    let longest = 1 ;
    let set= new Set();
    
    for(let i=0;i<n;i++){
        set.add(nums[i]);
    }
    
    for(let it of set){
        if(!set.has(it-1)){
            let count = 1;
            while(set.has(it+1)){
                it = it + 1;
                count +=1
            }
            longest = Math.max(count,longest)
        }
    }
    
    
    
    return longest;
};

console.log(longestConsecutiveOptimized(nums))