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
// const promise21a = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("First Promise Resolved");
//   }, 1000);
// });
// const promise21b = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Second Promise Resolved");
//   }, 1000);
//   //   res("Second Promise Resolved");
// });
// const promise21c = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Third Promise Resolved");
//   }, 1000);
// });

// Promise.race([promise21a, promise21b, promise21c])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// ? 22. Create two promises where one resolves and one rejects after different times, and use  Promise.race()` to handle both outcomes.
// const promise22a = new Promise((res, rej) =>
//   setTimeout(() => {
//     res("promise resolved");
//   }, 1000)
// );
// const promise22b = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Promise REJECTED");
//   }, 2000);
// });

// Promise.race([promise22a, promise22b])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//? 23. Create three promises that resolve with different values after random times, and use `Promise.race()` to log the first resolved value.
// const promise23a = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise 1 resolved");
//   }, Math.floor(Math.random() * 6000));
// });

// const promise23b = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise 2 resolved");
//   }, Math.floor(Math.random() * 6000));
// });
// Promise.race([promise23a, promise23b])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// ? 24. Create four promises that reject at different times, and use `Promise.race()` to log the first rejection.
// const promise24a = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Promise 1 rejected");
//   }, Math.floor(Math.random() * 6000));
// });

// const promise24b = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Promise 2 rejected");
//   }, Math.floor(Math.random() * 6000));
// });
// Promise.race([promise24a, promise24b])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//? 25. Create two promises that resolve with strings and use `Promise.race()` to determine which string is logged first.
// const promise25a = new Promise((res, rej) => {
//   res("Hellow");
// });
// const promise25b = new Promise((res, rej) => {
//   res("World");
// });

// Promise.race([promise25a, promise25b])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// ? 26. Create an async function that uses `await` to wait for a promise that resolves after 2 seconds.
// const problem26 = async () => {
//   const promise26 = await new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Promise Resolved");
//     }, 2000);
//   });
//   console.log(promise26);
// };

// problem26();

// ? 27. Create an async function that waits for two promises to resolve and then returns their combined values.

// const problem27 = async () => {
//   const promise27a = await new Promise((res, rej) => {
//     res("Promise 1 Resolved");
//   });
//   const promise27b = await new Promise((res, rej) => {
//     res("Promise 2 Resolved");
//   });
//   console.log(promise27a, ",", promise27b);
// };

// problem27();

// ? 28. Create an async function that handles a promise rejection using try-catch.
// const promise28 = new Promise((res, rej) => {
//   rej("Promise rejected");
// });

// const handlePromiseRejection = async () => {
//   try {
//     await promise28;
//   } catch (error) {
//     console.log(error);
//   }
// };

// handlePromiseRejection();

// ? 29. Create an async function that waits for a promise to resolve and then calls another async function.
// const anotherFunction = async () => {
//   const promise29b = await new Promise((res, rej) => {
//     res("Promise 2 Resolved");
//   });
//   console.log(promise29b);
// };
// const problem29 = async () => {
//   const promise29a = await new Promise((res, rej) => {
//     res("Promise 1 resolved");
//   });
//   console.log(promise29a);
//   await anotherFunction();
// };

// problem29();

// ? 30. Create an async function that waits for multiple promises to resolve using `Promise.all()`.
// const handleMultiplePromises = async () => {
//   const promise30a = await new Promise((res, rej) => {
//     res("Promise 1 resolved");
//   });
//   const promise30b = await new Promise((res, rej) => {
//     res("Promise 2 resolved");
//   });
//   const promise30c = await new Promise((res, rej) => {
//     res("Promise 3 resolved");
//   });
//   const promise30d = await new Promise((res, rej) => {
//     res("Promise 4 resolved");
//   });
//   Promise.all([promise30a, promise30b, promise30c, promise30d]).then((result) =>
//     console.log(result)
//   );
// };
// handleMultiplePromises();

// ? 31. Create a promise that simulates fetching user data from an API and resolves with a user  object.
// const promise31 = new Promise((res, rej) => {
//   fetch("https://picsum.photos/v2/list")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Error occured! ");
//       }
//       return response.json();
//     })
//     .then((data) => res(data))
//     .catch((err) => rej(err));
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

// ? 32. Create a promise that simulates fetching data from two different APIs and combines the results.
// const promise32 = new Promise((res, rej) => {
//   Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
//       if (!response.ok) {
//         throw new Error("Error occurred while fetching from API 1!");
//       }
//       return response.json();
//     }),

//     fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
//       if (!response.ok) {
//         throw new Error("Error occurred while fetching from API 2!");
//       }
//       return response.json();
//     }),
//   ])
//     .then((bothResults) => res(bothResults))
//     .catch((err) => rej(err.message));
// });

// promise32
//   .then((combinedData) => console.log("Combined data :", combinedData))
//   .catch((err) => console.log(err));

// ? 33. Create a promise that resolves with a list of items and then another promise that filters the items based on a condition.

// const ItemsPromise = new Promise((res) => {
//   const items = [
//     { id: 0, name: "Item 1", category: "A" },
//     { id: 1, name: "Item 2", category: "C" },
//     { id: 2, name: "Item 3", category: "D" },
//     { id: 3, name: "Item 4", category: "B" },
//     { id: 4, name: "Item 5", category: "E" },
//     { id: 5, name: "Item 6", category: "F" },
//   ];
//   res(items);
// });

// const filterItems = (items, category) => {
//   return new Promise((res) => {
//     const filteredItems = items.filter((item) => {
//       return item.category === category;
//     });
//     res(filteredItems);
//   });
// };

// ItemsPromise.then((Allitems) => {
//   console.log("All items", Allitems);
//   return filterItems(Allitems, "C");
// })
//   .then((FILTER) => {
//     console.log("Filtered Items", FILTER);
//   })
//   .catch((err) => console.log(err));

// ? 34. Create a promise that simulates a login operation and resolves with a success message or rejects with an error message.

// const StimulateLoginPage = (username, password) => {
//   return new Promise((res, rej) => {
//     let validUsername = "mudassir";
//     let validPassword = "admin";
//     if (username === validUsername && password === validPassword) {
//       res("Login successfull");
//     } else {
//       rej("Login failed");
//     }
//   })
//     .then((successfull) => console.log(successfull))
//     .catch((err) => console.log(err));
// };

// StimulateLoginPage("mudassir", "admin");

// ? 35. Create a promise that simulates reading a file and resolves with the file contents or rejects if the  file is not found.

// const stimulatesFiles = (fileName) => {
//   return new Promise((res, rej) => {
//     const files = {
//       "file1.txt": "This is the content of file1.txt",
//       "file2.txt": "This is the content of file2.txt",
//     };
//     const fileContent = files[fileName];
//     if (fileContent) {
//       res(fileContent);
//     } else {
//       rej("File not found " + fileName);
//     }
//   });
// };

// stimulatesFiles("file2.txt")
//   .then((file) => console.log("File Content is :", file))
//   .catch((err) => console.log(err));

// stimulatesFiles("file1.txt")
//   .then((file) => console.log("File Content is :", file))
//   .catch((err) => console.log(err));
// stimulatesFiles("file0.txt")
//   .then((file) => console.log("File Content is :", file))
//   .catch((err) => console.log(err));

// ? 36. Create a promise that resolves with the current date and time after 1 second.
// const promise36 = new Promise((res, rej) => {
//   setTimeout(() => {
//     const date = new Date();

//     res(date);
//   }, 1000);
// })
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// ? 37. Create a promise that resolves with a randomly generated number between 1 and 100.

// const promise37 = new Promise((res, rej) => {
//   const randomNumber = Math.floor(Math.random() * 100);
//   res(randomNumber);
// }).then((ranNumber) => console.log(ranNumber));

// ? 38. Create a promise that resolves with the square of a given number.
// const sqaure = (num) => {
//   return new Promise((res, rej) => {
//     res(num * num);
//   });
// };

// sqaure(6)
//   .then((sq) => console.log(sq))
//   .catch((err) => console.log(err));

// sqaure(2)
//   .then((sq) => console.log(sq))
//   .catch((err) => console.log(err));
// sqaure(10)
//   .then((sq) => console.log(sq))
//   .catch((err) => console.log(err));

// ? 39. Create a promise that resolves with the reverse of a given string.
// const ReverseStr = (str) => {
//   return new Promise((res, rej) => {
//     let reverseStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reverseStr += str[i];
//     }
//     res(reverseStr);
//   });
// };

// ReverseStr("Mudassir")
//   .then((revStr) => console.log(revStr))
//   .catch((err) => console.log(err));

// ReverseStr("abdul")
//   .then((revStr) => console.log(revStr))
//   .catch((err) => console.log(err));

// ReverseStr("haris")
//   .then((revStr) => console.log(revStr))
//   .catch((err) => console.log(err));

// ReverseStr("aqif")
//   .then((revStr) => console.log(revStr))
//   .catch((err) => console.log(err));

// ? 40. Create a promise that simulates a countdown timer and resolves when the countdown reaches zero.

// const CountDownTimer = () => {
//   return new Promise((res, rej) => {
//     let countdown = 10;
//     const intervalId = setInterval(() => {
//       console.log(
//         `${countdown} ${countdown > 1 ? "seconds" : "second"} remaining`
//       );
//       countdown--;
//       if (countdown < 0) {
//         clearInterval(intervalId);
//         res("CountDown Completed");
//       }
//     }, 1000);
//   })
//     .then((output) => console.log(output))
//     .catch((err) => console.log(err));
// };
// CountDownTimer();
// ? 41. Create a promise that resolves with an array of numbers sorted in ascending order.
// const arr = [1, 6, 7, 3, 5, 6, 8, 9];
// const SortedArrayOfNumbers = (arr) => {
//   return new Promise((res, rej) => {
//     const sortedArr = arr.sort((a, b) => a - b);
//     res(sortedArr);
//   });
// };
// SortedArrayOfNumbers(arr)
//   .then((sortedArray) => console.log(sortedArray))
//   .catch((err) => console.log(err));

// ? 42. Create a promise that fetches data from an API and parses the JSON response.
// const fetchData = () => {
//   return new Promise((res, rej) => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Error occured!");
//         }
//         return response.json();
//       })
//       .then((data) => res(data))
//       .catch((err) => rej(err));
//   });
// };

// fetchData()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ? 43. Create a promise that simulates a delay using `setTimeout` and resolves after the delay.
// const stimulateDelay = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Promise Resolved after some delay");
//     }, 3000);
//   });
// };

// stimulateDelay()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ? 44. Create a promise that resolves with the result of a mathematical operation (e.g., addition, subtraction).
// const mathematicalOperation = () => {
//   return new Promise((res, rej) => {
//     let a = 10;
//     let b = 3;
//     res(a + b);
//   });
// };
// mathematicalOperation()
//   .then((add) => console.log(add))
//   .catch((err) => console.log(err));

// ? 45. Create a promise that resolves with a randomly chosen element from an array.
// const RandomElementChoose = () => {
//   return new Promise((res, rej) => {
//     let arr = [1, 5, 3, 56, 8, 3, 15];
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     let randomElement = arr[randomIndex];
//     res(randomElement);
//   });
// };
// RandomElementChoose()
//   .then((randomEle) => console.log(randomEle))
//   .catch((err) => console.log(err));

// ? 46. Create a promise that resolves with the sum of the resolved values of two other promises.
const promise46a = new Promise((res, rej) => {
  res(10);
});
const promise46b = new Promise((res, rej) => {
  res(7);
});

Promise.all([promise46a, promise46b])
  .then((sum) => console.log(sum.reduce((acc, curr) => acc + curr)))
  .catch((err) => console.log(err));
