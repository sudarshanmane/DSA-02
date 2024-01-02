let input = [5, 1, 2, 4, 3];

let count = 1;
let stack = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] == count) {
    console.log(count, input[i] === 3, i);

    count++;
  } else if (stack[stack.length - 1] === count) {
    console.log(stack[stack.length - 1]);

    stack.pop();
    count++;
  } else {
    stack.push(input[i]);
  }
}

if (stack.length != 0) {
  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[stack.length - 1] === count) {
      count++;
      stack.pop();
    } else {
      break;
    }
  }
}

if (stack.length != 0) {
  console.log("yes");
} else {
    console.log("no");
}
