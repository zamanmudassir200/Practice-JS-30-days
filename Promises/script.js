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

const promise8 = new Promise((res, rej) => {
  res("Hello ");
})
  .then((str) => str + "World!")
  .then((output) => console.log(output));

// ? 9. Chain three promises where the first resolves with a number, the second doubles the number,  and the third converts the result to a string.
const promise9 = new Promise((res, rej) => {
  res(4);
})
  .then((num) => num * 2)
  .then((double) => String(double))
  .then((result) => console.log(result, typeof result));
