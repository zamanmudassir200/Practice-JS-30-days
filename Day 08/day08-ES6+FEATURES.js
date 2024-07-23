// ? Activity 1: Template Literals
// ? Task 1:
const name = "Mudassir";
const age = 23;
const string = `My name is ${name} and I am ${age} years old`;

console.log(string);
// ? Task 2:
const multiLineStr = `My name is ${name} and 
sadsah
asdashjd
asdkjas
asdas
asd`;

console.log(multiLineStr);

// ? Activity 2: Destructuring
// ? Task 3:
const cars = ["suzuki", "swift", "mercedes"];

const [a, b] = cars;
console.log(a, b);

// ? Task 4:
const book = {
  title: "Quran Majeed",
  author: "Allah SWT",
};

const { title, author } = book;
console.log(title, author);

// ? Activity 3: Spread and Rest Operators
// ? Task 5:
const marks = [24, 56, 78, 45, 39];
const newMarks = [...marks, 89, 78];
console.log(newMarks);

// ? Task 6:
const sum = (...marks) => {
  return marks.reduce((acc, curr) => acc + curr, 0);
};
console.log(sum(...marks));
// ? Activity 4: Default Parameters
// ? Task 7:

const product = (num1, num2 = 1) => {
  return num1 * num2;
};
console.log(product(5));
console.log(product(5, 7));

//? Activity 5: Enhanced Object Literals
// ? Task 8:
const myName = "Mudassir";
const myAge = 23;
const person = {
  myName,
  myAge,
  greet() {
    console.log(
      `Hello, my name is ${this.myName} and I am ${this.myAge} years old.`
    );
  },
};

console.log(person);
person.greet();

// ? Task 9:
const key1 = 13;
const key2 = 24;
const students = {
  [key1]: "Abdul Wahab",
  [key2]: "M.Mudassir",
  marks: 57,
};
console.log(students);
