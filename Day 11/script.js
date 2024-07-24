// // ? Activity 1: Understanding Promises
// // ? Task 1:

// const resolvedPromise = (msg) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Promise Resolved " + msg);
//     }, 2000);
//   });
// };
// resolvedPromise("M.MUDASSIR ZAMAN")
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

// // ? Task 2:
// const rejectPromise = (err) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej(new Error(err));
//     }, 2000);
//   });
// };

// rejectPromise("REJECTED")
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

// ? Activity 2: Chaning Promises
// ? Task 3:
// const fetchingDataFromServer = (url, delay) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log(`FETCHED DATA FROM ${url}`);
//       res(`Data from url ${url}`);
//     }, delay);
//   });
// };

// const fetchSequence = () => {
//   fetchingDataFromServer("https://picsum.photos/v2/list", 1000)
//     .then((data1) => {
//       console.log(`Recieved data1 : ${data1}`);
//       return fetchingDataFromServer("https://picsum.photos/v2/list", 7000);
//     })
//     .then((data2) => {
//       console.log(`Recieved data2 : ${data2}`);
//       return fetchingDataFromServer("https://picsum.photos/v2/list", 1500);
//     })
//     .then((data3) => {
//       console.log(`Recieved data3 : ${data3}`);
//       console.log("All data fetched successfully");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// fetchSequence();
// ?  Activity 3: using Async/Await
// ? Task 4 and 5:
// const fetchingPromise = async (promise) => {
//   try {
//     const resolvedValue = await promise;
//     console.log("Resolved value:", resolvedValue);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };
// const myPromise = new Promise((res, rej) => {
//   rej("Promise Rejected");
// });
// fetchingPromise(myPromise);

// ? Activity 4: Fetching data from an API

// ? Task 6:
const fetchDataWithPromise = () => {
  return new Promise((res, rej) => {
    try {
      const response = fetch("htps://picsum.photos/v2/list");
      const data = response.json();
      res(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
};

fetchDataWithPromise();
// ? Task 7:
// const fetchingData = async () => {
//   try {
//     const response = await fetch("htps://picsum.photos/v2/list");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchingData();
