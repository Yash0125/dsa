// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"
// Output: "blue is sky the"
// Input: "  hello world  "
// Output: "world hello"
// Input: "a good   example"
// Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

let s = "the sky is blue";

const reverseWords = (s) => {
  let splitS = s.split(" ");
  const stack = [];

  for (let i of splitS) {
    stack.push(i);
  }

  let finals = "";

  while (stack.length) {
    const current = stack.pop();

    if (current) {
      finals += " " + current;
    }
  }
  return finals.trim();
};

console.log(reverseWords(s));

// TC : O(2n) = O(n)
// SC : O(2n) = O(n)
