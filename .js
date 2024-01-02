let data = {
  "0-expense_date": "2024-01-29",
  "0-desc": "asdfa",
  "0-category": 1,
  "0-amount": 3423,
  "0-claim_reimbursement": true,
  "0-expense_bill": "file",
  "1-expense_date": "2024-01-25",
  "1-desc": "asdfas",
  "1-category": 13,
  "1-amount": 234233,
  "1-claim_reimbursement": true,
  "1-expense_bill": undefined,
};

let finalData = [];

let keys = Object.keys(data);
let obj = {};
let current = 0;

for (let i = 0; i < keys.length; i++) {
  let cur_key = keys[i].split("-");
  if (cur_key[0] == current.toString()) {
    obj[cur_key[1]] = data[keys[i]];
  } else {
    finalData.push(obj);
    obj = {};
    current = current + 1;
    obj[cur_key[1]] = data[keys[i]];
  }

  if (i === keys.length - 1) {
    finalData.push(obj);
  }
}

console.log(finalData);
