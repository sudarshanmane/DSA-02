// Such Pair Returns
// Description
// For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) if
//  there are 2 integers present in the array whose sum is K.Else print "-1"(without quotes).
// Input
// 10^6Input Format :
// First line contains T, no of test cases.
// First line of each test case contains 2 space separated integers: N & K
// Second line of each test case contains **N** space separated integers
// Constraints :
// 1 <= T <= 10
// 1 <= N <=1000000
// 1 <= abs(A[i]) <=10^6 <= abs(K) <= 2*10^6

// Output
// Output 1/-1 depending on the condition for each test case on new line

// Sample Input 1

// 1
// 5 2
// 3 4 0 2 7
// Sample Output 1

// 1

function myfunction(n, k, arr) {
  let newarr = arr.sort(function (a, b) {
    return a - b;
  });

  let flag = false;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    if (newarr[i] + newarr[j] == k) {
      flag = true;
      break;
    } else if (newarr[i] + newarr[j] > k) {
      j--;
    } else {
      i++;
    }
  }
  if (flag) {
    console.log(1);
  } else {
    console.log(-1);
  }
}

let input = [3, 4, 0, 2, 7];
for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++) {
    if (input[i] > input[j]) {
      let temp = input[i];
      input[i] = input[j];
      input[j] = temp;
    }
  }
}

let start = 0;
let end = input.length - 1;
let K = 2;

while (start < end) {
  let sum = input[start] + input[end];
  if (sum === K) {
    console.log(1);
    break;
  } else if (K < sum) {
    end--;
  } else if (K > sum) {
    start++;
  } else if (input[start] === input[end]) {
    start++;
    end--;
  }
}

console.log(-1);
