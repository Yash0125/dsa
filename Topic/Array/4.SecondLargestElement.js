// Input : [12,35,1,10,34,1]
// Input : [10,1,10]

// brute force approach

let arr=[10,1,10]

function secondLargest(arr) {
    let uniqueArr=Array.from(new Set(arr))

    uniqueArr.sort((a,b)=>b-a)
    if(uniqueArr.length>=2){
        return uniqueArr[1]
    }else{
        return -1
    }
    
}

console.log(secondLargest(arr))

// Optimised solution


function secondLargestOptimised(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] != largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
  
    return secondLargest;
  }
  
  console.log(secondLargestOptimised(arr));
