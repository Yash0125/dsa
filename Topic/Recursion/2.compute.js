// Define the input object with functions and nested objects
const input = {
  A: (a, b, c) => a + b + c,
  B: (a, b, c) => a - b - c,
  C: (a, b, c) => a + b * c,
  D: {
    E: (a, b, c) => a + b + c,
  },
};

// Function to compute the results based on input functions
function compute(a, b, c, obj = input) {
  // Initialize an empty object to store the results
  let output = {};

  // Iterate over each key in the input object
  for (let key in obj) {
    // Check if the current property is a function
    if (typeof obj[key] === "function") {
      // Call the function with the provided arguments and store the result
      output[key] = obj[key](a, b, c);
    } else if (typeof obj[key] === "object") {
      // If the current property is an object, recursively call the compute function
      // This handles nested objects and computes their results
      output[key] = compute(a, b, c, obj[key]);
    }
  }
  
  // Return the final computed output
  return output;
}

// Example usage: Call the compute function with arguments (1, 1, 1)
console.log(compute(1, 1, 1));

// Expected output:
// {
//   A: 3,   // 1 + 1 + 1
//   B: -1,  // 1 - 1 - 1
//   C: 2,   // 1 + 1 * 1
//   D: {
//     E: 3  // 1 + 1 + 1
//   }
// }
