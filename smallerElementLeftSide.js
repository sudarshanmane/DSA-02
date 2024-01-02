let input = [39, 27, 11, 4, 24, 32, 32, 1];
let stack = [];
let ans = [];

for (let i = 0; i < input.length; i++) {
  if (stack.length != 0 && stack[stack.length - 1] < input[i]) {
    stack.push(input[i]);
  } else {
    console.log(-1);
    stack.push(input[i]);
  }
}
