// // ? Activity 1: For Loop
// // ? Task 1:
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// // ? Task 2:
// for (let i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }
// ? Activity 2 : While Loop
// ? Task 3:
// let num = 1;
// let sum = 0;
// while (num <= 10) {
//   sum += num;
//   num++;
// }
// console.log(sum);
// ? Task 4:

// let num = 10;
// while (num >= 1) {
//   console.log(num);
//   num--;
// }

// ? Activity 3: Do...while Loop
// ? Task 5:
// let num = 1;
// do {
//   console.log(num);
//   num++;
// } while (num <= 5);

// ? Task 6:
let number = 5;
let i = number;
let fact = 1;
do {
  fact *= i;
  i--;
} while (i >= 1);
console.log(fact);

// ? Task 7:
// let star = " ";
// for (let i = 1; i <= 5; i++) {
//   for (let j = i; j <= i; j++) {
//     star += "* ";
//     console.log(star);
//   }
// }

// ? Task 8:

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// ? Task 9:
// for (let i = 1; i <= 10; i++) {
//   if (i === 7) {
//     break;
//   }
//   console.log(i);
// }
