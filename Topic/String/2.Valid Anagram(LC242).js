// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Brute force

let s = "anagram";
let t = "nagaram";

var isAnagram = function (s, t) {
  s = s.split("").reverse().sort().join("");
  t = t.split("").reverse().sort().join("");
  return s === t;
};

console.log(isAnagram(s, t));

// optimized

var isAnagram1 = function (s, t) {
  if (s.length !== t.length) return flase;
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram1(s, t));

const isAnagram2 = (s, t) => {
  const charArr = new Array(256).fill(0);
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    charArr[s.charCodeAt(i)]++;
    charArr[t.charCodeAt(i)]--;
  }
  for (let i = 0; i <= 256; i++) {
    if (charArr[i] !== 0) return false;
  }
  return true;
};

console.log(isAnagram2(s, t));
