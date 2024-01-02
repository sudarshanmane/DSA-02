// X subarrays Ended
// Description

// Given a array A having N positive integers. Count all the subarrays of A having length X,
//  such that each subarray has no integer greater than K.

// Input
// First line: Single integer T denoting the number of test cases.
// For each test case:
// First line: Three space separated integers denoting the value of N, K and, X.
// Next line : N single space separated integers denoting the elements of array A.
// Constraints:
// 1 <= T<= 50
// 1<= N <= 1000000
// 1 <= A[ i ], K <= 100000
// 1 <= X <= N

// Output
// For each test case, print in a new line a single integer denoting the number of subarrays.

// Sample Input 1

// 1
// 5 3 2
// 1 3 2 5 1
// Sample Output 1

// 2
// Hint

// Given for the only test case,
// N = 5, K = 3, X = 2

// The following subarrays of length 2 have no integer greater then 3 in them :
// [ 1, 3 ], [ 3, 2 ].

// No other subarray is possible.

function myFunction(arr, N, K, X) {
  //1 3 2 5 1
  let count = 0;
  let length = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] <= K) {
      length++;
      if (length == X) {
        count++;
        length--;
      }
    } else {
      length = 0;
    }
  }
  console.log(count);
}

function subArrayLessThanK(arr, n, k, x) {
  let count = 0;
  let length = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      length++;
      if (length === x) {
        count++;
        length--;
      }
    } else {
      length = 0;
    }
  }
  console.log(count);
}

subArrayLessThanK([1, 3, 2, 5, 1], 5, 3, 2);
