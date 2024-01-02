// Answer Queries Ended
// Description

// You are given an integer array arr of size n. This array is queried q times. In each query, 
// an element x is given.For each query, you have to print "YES" if the element exists in the array or "NO" if it doesn't exist

// Input
// Input Format

// First line contains n the number of elements in the array

// Second line contains n space separated integers, the elements of the array

// Third line contains q, the number of queries

// Fourth line contains q space separated integers

// Constraints

// 1 <= n <= 10e5

// 1 <= arr[i] <= 10e5

// 1 <= q <= 10e5

// 1 <= query[i] <= 10e5

// Output
// For each query, print on a new line, "YES" if the element exists in the array, "NO" otherwise
// Sample Input 1

// 5
// 1 2 3 4 5
// 3
// 3 5 7
// Sample Output 1

// YES
// YES
// NO
function Answer(N, arr, n, qry) {
  let obj = {};
  for (let i = 0; i < N; i++) {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (obj[qry[i]] == 1) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
