// Longest Repeated Odd Ended
// Description

// You are given an array A of N integers. Your task is to find the maximum number of times an odd number
//  is continuously repeated in the array.

// Input
// Input Format

// First line contains N which is the number of element present in the array

// Second line contains N integers which are the values of array.

// Constraints

// N<100

// Output
// Output Format

// Output one integer which the maximum number of times an odd number is repeated in array.

// Sample Input 1

// 12
// 1 1 1 1 2 2 2 2 2 1 1 1
// Sample Output 1

// 4
// Hint

// Sample 1 Explanation

// 1 is repeated 4 times from index 0 to index 3 => 4 times

// 2 is repeated 5 times from index 4 to index 8 => 5 times

// 1 is repeated 3 times from index 9 to index 11 => 3 times

// So, the output is 4 since 1 is odd.
// function myFunction(N, arr) {
//   let count = 0;
//   let max = -Infinity;
//   for (let i = 0; i < N; i++) {
//     if (
//       arr[i] % 2 == 1 &&
//       (arr[i - 1] == arr[i] || arr[0] == arr[i] || arr[i - 1] % 2 == 0)
//     ) {
//       count++;
//       if (max < count) {
//         max = count;
//       }
//     } else {
//       count = 0;
//     }
//   }
//   if (max == -Infinity) {
//     console.log(0);
//   } else {
//     console.log(max);
//   }
// }

function fun(arr) {
  let len = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      count++;
    } else {
      if (len === 0) {
        len = count;
        console.log(len, i);
      } else if (len < count) {
        len = count;
        console.log(len, 2);
      }
      count = 0;
      count++;
    }
  }

  if (len < count) {
    len = count;
  }
  console.log(len);
}

fun([1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1]);
