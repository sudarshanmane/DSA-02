// Make a wave of Array -82:13:23
// Description

// Given an array of length N , sort the array into a wave-like pattern.

// An array is sorted in waveform if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >=  and so on ...

// Input
// Input Format

// First Line consists of the length of array N

// Second Line consists of N integers separated by spaces.

// Constraints

// 1 <= N <= 10^6

// Output
// Print the output array.

// Sample Input 1

// 10
// 9 8 4 10 3 6 5 7 1 2
// Sample Output 1

// 2 1 4 3 6 5 8 7 10 9

// function myFunction(N, arr) {
//   let temp = "";
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   for (let i = 0; i < N; i++) {
//     temp += arr[i + 1] + " ";
//     temp += arr[i] + " ";
//     i++;
//   }
//   console.log(temp.trim());
// }

function makeWaveOutOfArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  let start = 0;
  let next = 1;

  while (next < arr.length) {
    let temp = arr[next];
    arr[next] = arr[start];
    arr[start] = temp;

    start = next + 1;
    next = start + 1;
  }
  console.log(arr);
}

makeWaveOutOfArr([2, 1, 4, 3, 6, 5, 8, 7, 10, 9]);
