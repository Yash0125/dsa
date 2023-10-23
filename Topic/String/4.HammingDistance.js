// Given two strings x and y, return the Hamming distance between them.

// Input: x = "hello", y = "hwllr"
// Output: 2
// Explanation:
//   (hello)
//   (hwllr)
//     ↑  ↑

// Question - 1

let x ="hello";
let y ="hwllr";

var hammimgDistance=function (x,y){
    if(x.length!==y.length){
        throw new Error("error")
    }
    let distance = 0;
    for(let i=0;i<x.length;i++){
        if(x[i]!==y[i]){
            distance++
        }
    }
    return distance
}

console.log(hammimgDistance(x,y))

// Question - 2

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

 

// Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
// Example 2:

// Input: x = 3, y = 1
// Output: 1


var hammimgDistance1=function (x,y){
     // Convert x and y to binary strings
    x=x.toString(2)
    y=y.toString(2)

    // Ensure that the binary strings have the same length by adding leading zeros
    if(x.length < y.length){
        while(x.length !==y.length){
            x='0'+x
        }
    }else if(x.length > y.length){
        while(x.length !==y.length){
            y='0'+y
        }
    }

    let distance = 0;  // Initialize a variable to keep track of the Hamming distance

    // Calculate the Hamming distance by comparing each bit of the binary representations
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            distance++;  // Increment the distance if the bits are different
        }
    }

    return distance;  // Return the calculated Hamming distance
}

console.log(hammimgDistance1(x,y))

