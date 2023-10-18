// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

let x=121

var isPalindrome = function(x) {
    if(x.length<2) return false
    return x===+x.toString().split('').reverse().join('')
};

console.log(isPalindrome(x))


// for string

let inputString="nayan"

function isPalindrome1(inputString) {
  
  inputString = inputString.toLowerCase();
  
  inputString =  inputString.split(' ').join('')
  
  let reverseString = inputString.split('').reverse().join('')
  
  return inputString === reverseString
  
}

console.log(isPalindrome1(inputString))