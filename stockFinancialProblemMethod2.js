let input = [100, 60, 70, 65, 80, 85];
// ans ---> 1 1 2 1 4 5

let stack = [];
let ans = [];

for (let i = 0; i < input.length; i++) {
  while (stack.length != 0 && input[stack[stack.length - 1]] <= input[i]) {
    stack.pop();
  }

  if (stack.length != 0 && input[stack[stack.length - 1]] > input[i]) {
    ans.push(i - stack[stack.length - 1]);
  } else {
    ans.push(1);
  }

  stack.push(i);
}

console.log(ans);
