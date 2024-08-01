// ? Activity 1: Creating and Exporting Modules
// ? Task 1:

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

export { add, sub };

// ? Task 2:
export const person = {
  name: "Mudassir",
  age: 23,
  purpose() {
    return "To help others";
  },
};
// ? Activity 2: Named and Default Exports
// ? Task 3:

export const greet = () => {
  return "Good Afternoon";
};
export const hello = () => {
  return "Hello";
};

// ? Task 4:
import singleFunction from "./task4.js";

console.log(singleFunction());

// ? Activity 3: Importing Entire Modules
// ? Task 5:
import mul, { PI, areaOfCircle, r } from "./task5.js";

console.log(mul(2, 8));
console.log("PI:", PI, "Area of circle:", areaOfCircle);

// ? Activity 4: Using Third-Party Modules
// ? Task 6:

import _ from "lodash";
const numbers = [1, 2, 4];

const sum = _.sum(numbers);
console.log(sum);

// ? Task 7 :

import axios from "axios";

axios
  .get("https://api.example.com/data")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
