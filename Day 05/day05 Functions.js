// ? Activity 1: Function Decleration
// ? Task 1:
function isEven() {
  let num = 5;
  if (num % 2 === 0) {
    console.log(`The number ${num} is Even`);
  } else {
    console.log(`The number ${num} is Odd`);
  }
}

isEven();
// ? Task 2:
function sqaure() {
  let num = 4;
  return num ** 2;
}
console.log(sqaure());
//?  Activity 2: Function Expression
// ? Task 3:

function maxNum() {
  let num1 = 2,
    num2 = 2;
  if (num1 > num2) {
    console.log("Num1 is greater than Num2");
  } else if (num1 < num2) {
    console.log("Num2 is greater than Num1");
  } else {
    console.log("Num1 and Num2 are equal");
  }
}
maxNum();

// ? Task 4:

function stringConcat() {
  let str1 = "Mudassir ",
    str2 = "Zaman";
  return str1 + str2;
}
console.log(stringConcat());

// ? Activity 3: Arrow Functions
// ? Task 5:

const sum = () => {
  let num1 = 4;
  num2 = 6;
  return num1 + num2;
};
console.log(sum());

// ? Task 6:
const findingCharInAStr = () => {
  let str = "Ny name is Mudassir";
  let str1 = str.includes("n");
  if (str1) {
    return str1;
  }
};
console.log(findingCharInAStr());

// ? Activity 4: Function Parameters and Default Values
// ? Task 7:
const product = (num1, num2 = 4) => {
  return num1 * num2;
};
console.log(product(2));

// ? Task 8:
const greeting = (pName, pAge = 23) => {
  console.log(`Good morning! ${pName}, You are ${pAge} years old `);
};
greeting("Mudassir");

// ? Activity 5: Higher-Order Function
// ? Task 9:

const repeatedFunction = (mul, num) => {
  for (let i = 0; i <= num; i++) {
    console.log(mul(4, 7));
  }
};

repeatedFunction((x, y) => {
  return x * y;
}, 5);

// ? Task 10:
const HOF = (func1, func2, value) => {
  const result1 = func1(value);
  const result2 = func2(result1);
  return result2;
};
const halfTheNum = (x) => x / 2;
const divideBy10 = (x) => x / 3;

console.log(HOF(halfTheNum, divideBy10, 4));
