let arr = [12, 35, 1, 10, 34, 1];

function Largest(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  return arr[n - 1];
}

console.log(Largest(arr));

