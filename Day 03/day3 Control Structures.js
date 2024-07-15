// ? Activity 1: if-else Statements
// ? Task 1:
// let num = 0;
// if (num > 0) {
//   console.log("Number is Positive");
// } else if (num < 0) {
//   console.log("Number is Negative");
// } else {
//   console.log("Number is zero");
// }
// ? Task 2:
// let age = 18;

// if (age > 0 && age < 18) {
//   console.log("You are not eligible to vote");
// } else {
//   console.log("You are eligible to vote");
// }
// ? Activity 2: Nested if-else Statement
// ? Task 3:
let a = 70,
  b = 90,
  c = 80;
if (a >= b) {
  if (a >= c) {
    console.log("A is greatest number");
  } else {
    console.log("C is the greatest number");
  }
} else {
  if (b >= c) {
    console.log("B is the greatest number");
  } else {
    console.log("C is the largest number");
  }
}

// ? Activity 3: Switch Case:
// ? Task 4:
let day = 7;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

let score = 56;
switch (true) {
  case score > 80 && score <= 100:
    console.log("A grade");
    break;
  case score > 70 && score <= 80:
    console.log("B grade");
    break;
  case score > 60 && score <= 70:
    console.log("C grade");
    break;
  case score > 50 && score <= 60:
    console.log("D grade");
    break;
  default:
    console.log("F grade");
}

// ? Activity 4: Conditional (Ternary) Operator
// ? Task 6:
let number = 2;
let isEven = number % 2 === 0 ? "Number is Even" : "Number is Odd";
console.log(isEven);

// ? Activity 5: Combining Conditions
// ? Task 7:
let year = 2019;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} is a leap year`);
    } else {
      console.log(`${year} is not a leap year`);
    }
  } else {
    console.log(`${year} is a leap year`);
  }
} else {
  console.log(`${year} is not a leap year`);
}
