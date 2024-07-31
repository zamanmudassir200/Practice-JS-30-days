// ? Activity 1: Basic Error Handling with try-catch
// ? Task 1:
// const errFunction = () => {
//   throw new Error("This is an intentional error");
// };

// const handleError = () => {
//   try {
//     errFunction();
//   } catch (error) {
//     console.log(error);
//   }
// };

// handleError();

// ? Task 2:
// const divideFunction = (numerator, denomintor) => {
//   if (denomintor === 0) {
//     throw new Error("Denominator can not be zero");
//   }
//   return numerator / denomintor;
// };
// const handleDivideFunction = () => {
//   try {
//     console.log(divideFunction(4, 4));
//   } catch (error) {
//     console.log(error);
//   }
// };

// handleDivideFunction();

// ? Activity 2: Finally Block
// ? Task 3:
// const multiplyFunction = (a, b) => {
//   if (a || b !== ("" || undefined)) {
//     return a * b;
//   }
//   throw new Error("Error occured! you haven't passed the arguments");
// };
// console.log(multiplyFunction());
// const handleMultiplyFunction = () => {
//   try {
//     console.log(multiplyFunction(1));
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("hello i am finally block");
//   }
// };

// handleMultiplyFunction();

// ? Activity 3: Custom Error Object
// ? Task 4:

// class customError extends Error {
//   constructor(messgae) {
//     super(messgae);
//     this.name = "Custom Error";
//   }
// }
// function handleError() {
//   throw new customError("HANDLING ERROR USING TRY-CATCH BLOCK");
// }
// try {
//   handleError();
// } catch (error) {
//   console.error("Caught a custom error", error);
// }

// ? Task 5:

// function validatesUserInput(userInput) {
//   if (userInput !== "") console.log("Valid input:", userInput);
//   else {
//     throw new customError("Custom error");
//   }
// }
// try {
//   validatesUserInput("");
// } catch (error) {
//   console.error("String is empty", error);
// }
// ? Activity 4: Error handling in promises
// ? Task 6:
// const promise6 = new Promise((res, rej) => {
//   let value = Math.floor(Math.random() * 2);
//   console.log(value);
//   if (value) {
//     res("Promise 6 resolved", value);
//   } else {
//     rej("Promise 6 rejected", value);
//   }
// });
// promise6.then((result) => console.log(result)).catch((err) => console.log(err));

// ? Task 7:
// async function handleError() {
//   try {
//     const promise7 = new Promise((res, rej) => {
//       let value = Math.floor(Math.random() * 2);
//       console.log(value);
//       if (value) {
//         res("Promise 6 resolved", value);
//       } else {
//         rej("Promise 6 rejected", value);
//       }
//     });
//     const result = await promise7;
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// handleError().catch((err) => console.log(err));

// ? Activity 5: Graceful Error Handling in Fetch
// ? Task 8:
// const fetchingApi = fetch("https://pisum.photos/v2/list");
// fetchingApi
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ? Task 9:
// async function fetchingApi() {
//   const response = await fetch("https://picsum.photos/v2/list");
//   const data = await response.json();
//   console.log(data);
// }
// fetchingApi();
