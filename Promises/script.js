// ? 1. Create a promise that resolves with the message 'Success!' immediately.

// const promise1 = new Promise((res, rej) => {
//   res("Success!");
// });

// promise1.then(() => console.log("Promise Resolved"));

// ? 2. Create a promise that resolves with the value 10 after 2 seconds.
// const promise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(10);
//   }, 2000);
// });

// promise2.then((value) => console.log("Value " + value));

// ? 3. Create a promise that rejects with the message 'Error occurred!' immediately.
// const promise3 = new Promise((res, rej) => {
//   rej("Error Occured!");
// });

// promise3.catch((err) => console.log(err));

// ? 4. Create a promise that rejects with an error object containing a message 'Something went wrong! after 1 second.'
// const promise4 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej(new Error("Something went wrong!"));
//   }, 1000);
// });

// promise4.catch((err) => console.log(err.message));

// ? 5. Create a promise that resolves after a random amount of time (between 1 to 5 seconds) with a  message 'Random Success!'.

// const promise5 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Random Success!");
//   }, Math.floor(Math.random() * 5000));
// });
// promise5.then((msg) => console.log(msg));

// ? 6. Chain two promises where the first one resolves with the value 5, and the second one multiplies the resolved value by 2.

// const promise6 = new Promise((res, rej) => {
//   res(5);
// })
//   .then((value) => value * 2)
//   .then((result) => console.log(result));

// ? 7. Chain three promises where the first resolves with a number, the second adds 3 to the number, and the third multiplies the result by 5.

// const promise7 = new Promise((res, rej) => {
//   res(2);
// })
//   .then((value) => {
//     return value + 3;
//   })
//   .then((add) => {
//     return add * 5;
//   })
//   .then((result) => console.log(result));

// ? 8. Chain two promises where the first resolves with a string 'Hello', and the second appends ', World!' to the string.

// const promise8 = new Promise((res, rej) => {
//   res("Hello ");
// })
//   .then((str) => str + "World!")
//   .then((output) => console.log(output));

// ? 9. Chain three promises where the first resolves with a number, the second doubles the number,  and the third converts the result to a string.
// const promise9 = new Promise((res, rej) => {
//   res(4);
// })
//   .then((num) => num * 2)
//   .then((double) => String(double))
//   .then((result) => console.log(result, typeof result));

// ? 10. Chain four promises where each promise resolves with an incremented value starting from 1.
// let count = 1;

// const promise10 = new Promise((res, rej) => {
//   res(count);
// })
//   .then((value) => {
//     return ++count;
//   })
//   .then((value1) => {
//     return ++count;
//   })
//   .then((value2) => {
//     return ++count;
//   })
//   .then((value3) => {
//     console.log("Incremented Value: " + value3); // This will log the final incremented value.
//   });

//   ? 11. Create a promise that resolves with 'All good!' if the number is even and rejects with 'Odd number!' if the number is odd.
// let num = 7;
// const promise11 = new Promise((res, rej) => {
//   if (num % 2 === 0) {
//     res("All good!");
//   } else {
//     rej("Odd Number!");
//   }
// })
//   .then((even) => console.log(`${num} is Even number ` + even))
//   .catch((err) => console.log(`${num} is ` + err));

// ? 12. Create a promise that resolves with 'Positive number!' if the number is positive and rejects with 'Negative number!' if the number is negative.
// let number = -7;
// const promise12 = new Promise((res, rej) => {
//   if (number > 0) {
//     res("Positive number!");
//   } else {
//     rej("Negative number!");
//   }
// })
//   .then((positive) => console.log(`${number} is :` + positive))
//   .catch((err) => console.log(`${number} is : ` + err));

// ? 13. Create a promise that simulates an API call that sometimes fails and use `.catch()` to handle the error.
// const promise13 = new Promise((res, rej) => {
//   const success = Math.random() > 0.5; // Simulate a 50% chance of failure
//   if (success) {
//     res("https://picsum.photos/v2/list");
//   } else {
//     rej("Error Occurred!");
//   }
// })
//   .then((api) => console.log(api))
//   .catch((err) => console.log(err));

// ? 14. Chain two promises where the second promise only executes if the first one resolves successfully;
// let firstName = "M.MUDASSIR ";
// let lastName = "Zaman";

// const promise14 = new Promise((res, rej) => {
//   res(`${firstName}`);
// })
//   .then((frsName) => {
//     return frsName + lastName;
//   })
//   .then((name) => {
//     console.log(name);
//   });

// ? 15. Create a promise that rejects if a given string is empty and resolves otherwise.
// let str = "";
// const promise15 = new Promise((res, rej) => {
//   if (str !== "") res("the String contains " + str);
//   else rej("The given str is empty");
// })
//   .then((string) => console.log(string))
//   .catch((err) => console.log(err));
// ? 16. Create three promises that resolve with different values after 1, 2, and 3 seconds respectively, and use `Promise.all()` to log the results.
// const promise16a = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("First promise resolved");
//   }, 1000);
// });
// const promise16b = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Second promise resolved");
//   }, 2000);
// });
// const promise16c = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Third promise resolved");
//   }, 3000);
// });

// Promise.all([promise16a, promise16b, promise16c])
//   .then((results) => console.log(results))
//   .catch((err) => {
//     console.log(err);
//   });
// ? 17. Create two promises that resolve with the values 'First' and 'Second', and use `Promise.all()` to log the combined results.
// const promise17a = new Promise((res, rej) => {
//   res("First");
// });
// const promise17b = new Promise((res, rej) => {
//   res("Second");
// });
// Promise.all([promise17a, promise17b])
//   .then((output) => console.log(output))
//   .catch((err) => console.log(err));

// ? 18. Create three promises where one rejects after 2 seconds, and use `Promise.all()` to handle the rejection.

// const promise18a = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Promise 1 rejected");
//   }, 2000);
// });
// const promise18b = new Promise((res, rej) => {
//   res("Promise 2 resolved");
// });
// const promise18c = new Promise((res, rej) => {
//   res("Promise 3 resolved");
// });

// Promise.all([promise18a, promise18b, promise18c])
//   .then((output) => {
//     console.log(output);
//   })
//   .catch((err) => console.log(err));
// ? 19. Create five promises that resolve with numbers and use `Promise.all()` to sum the resolved values.
// const promise19a = new Promise((res, rej) => {
//   res(2);
// });
// const promise19b = new Promise((res, rej) => {
//   res(4);
// });
// const promise19c = new Promise((res, rej) => {
//   res(6);
// });
// const promise19d = new Promise((res, rej) => {
//   res(8);
// });
// const promise19e = new Promise((res, rej) => {
//   res(10);
// });

// Promise.all([promise19a, promise19b, promise19c, promise19d, promise19e])
//   .then((sum) =>
//     sum.reduce((acc, curr) => {
//       return acc + curr;
//     }, 0)
//   )
//   .then((result) =>
//     console.log("Sum of all numbers in the promises: " + result)
//   )
//   .catch((err) => console.log(err));

// ? 20. Create four promises that resolve with different strings and use `Promise.all()` to concatenate the strings.
// const promise20a = new Promise((res, rej) => {
//   res("Hello! ");
// });
// const promise20b = new Promise((res, rej) => {
//   res("How ");
// });
// const promise20c = new Promise((res, rej) => {
//   res("are ");
// });
// const promise20d = new Promise((res, rej) => {
//   res("you?");
// });

// Promise.all([promise20a, promise20b, promise20c, promise20d])
//   .then((strs) =>
//     strs.reduce((prev, curr) => {
//       return prev + curr;
//     })
//   )
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// ? 21. Create three promises that resolve at different times (1s, 2s, 3s) and use `Promise.race()` to log the result of the fastest one.
const promise21a = new Promise((res, rej) => {
  setTimeout(() => {
    res("First Promise Resolved");
  }, 1000);
});
const promise21b = new Promise((res, rej) => {
  setTimeout(() => {
    res("Second Promise Resolved");
  }, 1000);
  //   res("Second Promise Resolved");
});
const promise21c = new Promise((res, rej) => {
  setTimeout(() => {
    res("Third Promise Resolved");
  }, 1000);
});

Promise.race([promise21a, promise21b, promise21c])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
