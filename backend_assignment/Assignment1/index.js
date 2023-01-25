const { sum, div, mul, sub } = require("./Calculator");

const { argv } = require("process");
const value = process.argv;
value.splice(0, 2);
const crypto = require("crypto");
const array = new Uint8Array(2);
const data = crypto.getRandomValues(array);
console.log(data[0]);
switch (value[0]) {
  case "add":
    sum(Number(value[1]), Number(value[2]));
    break;
  case "mul":
    mul(Number(value[1]), Number(value[2]));
    break;
  case "sub":
    sub(Number(value[1]), Number(value[2]));
    break;
  case "div":
    div(Number(value[1]), Number(value[2]));
    break;
  case "random":
    randomnumber();
    break;
  default:
    break;
}
