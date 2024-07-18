// ? Activity 1: Array Creation and Access
// ? Task 1:

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// ? Task 2:
console.log(numbers[0]);
console.log(numbers[4]);
// ? Activity 2: Array Methods (Basic)
// ? Task 3:
numbers.push(6);
console.log(numbers);
// ? Task 4:
numbers.pop();
console.log(numbers);
// ? Task 5:
numbers.shift();
console.log(numbers);

// ? Task 6:
numbers.unshift(10);
console.log(numbers);

// ? Activity 3: Array Methods (Intermediate)
// ? Task 7:

const newNumbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = newNumbersArr.map((number) => number * 2);
console.log(newArr);

// ? Task 8:
const evenNumbersArr = newNumbersArr.filter((number) =>
  number % 2 === 0 ? number : null
);
console.log(evenNumbersArr);

// ? Task 9:
const sumOfNumbersArrays = newNumbersArr.reduce((acc, curr) => acc + curr, 0);
console.log(sumOfNumbersArrays);

// ? Activity 4: Array Iteration
// ? Task 10:
for (let i = 0; i <= newNumbersArr.length - 1; i++) {
  console.log(newNumbersArr[i]);
}

// ? Task 11:
numbers.forEach((num) => console.log(num));

// ? Activity 5: Multi-dimensional Arrays
// ? Task 12:
const twoDimensionalArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(twoDimensionalArr);

// ? Task 13:
console.log(twoDimensionalArr[0][2]);
