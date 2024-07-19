// ? Activity 1: Object Creation and Access
// ? Task 1:

// const book = {
//   title: "JavaScript Fundamentals",
//   author: "Brendan Eich",
//   year: "2024",
// };

// console.log(book);

// // ? Task 2:
// console.log(book.title, book.author);

// ? Activity 2: Object Methods
// ? Task 3:

// const book = {
//   title: "JavaScript Fundamentals",
//   author: "Brendan Eich",
//   year: "2024",
//   printData: function () {
//     return `Title : ${this.title} and Author: ${this.author}`;
//   },
// };

// console.log(book.printData());

// ? Task 4:
// const book = {
//   title: "JavaScript Fundamentals",
//   author: "Brendan Eich",
//   year: "2024",
//   printYear: function (newYear) {
//     this.year = newYear;
//   },
// };
// console.log(book["year"]);
// book.printYear(2000);
// console.log(book["year"]);

// ? Activity 3: Nested Objects
// ? Task 5:
// const library = {
//   name: "BUIC Library",
//   books: [
//     { title: "Mathematics", author: "John Doe", year: 2010 },
//     { title: "Calculus", author: "Jane Smith", year: 2012 },
//     { title: "Discrete Structures", author: "Alice Johnson", year: 2015 },
//   ],
// };

// console.log(library);

// // ? Task 6:

// console.log(library.name);
// // console.log(library.books[0].title);
// const titles = library.books.map((book) => book.title);
// console.log(titles);

// ? Activity 4: The this keyword
// ?  Task 7:
// const library = {
//   name: "BUIC Library",
//   books: [
//     {
//       title: "Mathematics",
//       author: "John Doe",
//       year: 2010,
//       printTitleAndYear: function () {
//         return `Title: ${this.title} and Year: ${this.year}`;
//       },
//     },
//     { title: "Calculus", author: "Jane Smith", year: 2012 },
//     { title: "Discrete Structures", author: "Alice Johnson", year: 2015 },
//   ],
// };

// console.log(library.books[0].printTitleAndYear());

// ? Activity 5: Object Iteration
// ? Task 8:
const book = {
  title: "JavaScript Fundamentals",
  author: "Brendan Eich",
  year: "2024",
};

for (let bk in book) {
  console.log(bk, ":", book[bk]);
}
// ? Task 9:
const keys = Object.keys(book);
const values = Object.values(book);
console.log(keys, ":", values);
