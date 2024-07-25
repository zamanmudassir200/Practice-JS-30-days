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
const divideFunction = (numerator, denomintor) => {
  if (denomintor === 0) {
    throw new Error("Denominator can not be zero");
  }
  return numerator / denomintor;
};
const handleDivideFunction = () => {
  try {
    console.log(divideFunction(4, 4));
  } catch (error) {
    console.log(error);
  }
};

handleDivideFunction();

// ? Activity 2: Finally Block
// ? Task 3:
const multiplyFunction = (a, b) => {
  if (a || b !== ("" || undefined)) {
    return a * b;
  }
  throw new Error("Error occured! you haven't passed the arguments");
};
console.log(multiplyFunction());
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
