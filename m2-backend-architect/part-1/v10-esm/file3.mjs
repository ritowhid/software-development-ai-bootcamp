import numbers from "./file1.mjs";
import { i as value, j as varue } from "./file2.mjs";
import add from "./utils/add.mjs";

const { a: firstNumber, b: secondNumber } = numbers;

console.log("First number: ", firstNumber);
console.log("Second Number: ", secondNumber);
console.log("Value and Varue from file3: ", value, varue);

console.log("Addition: ", add(firstNumber, secondNumber));
