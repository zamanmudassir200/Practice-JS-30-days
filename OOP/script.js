//? Classes and Objects
// ? 1. Create a `Person` class with properties for name and age. Add a method to display the person's details.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   printDetails() {
//     console.log(`My name is ${this.name} and i am ${this.age} years old`);
//   }
// }

// const p1 = new Person("Mudassir", 23);
// p1.printDetails();

// ? 2. Write a `Car` class with properties for make, model, and year. Add a method to display the car's details.
// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   displayCarsDetails() {
//     console.log(
//       `my car make is ${this.make}, model is ${this.model} and year is ${this.year}`
//     );
//   }
// }

// const car1 = new Car("toyota", "corola", 2024);
// car1.displayCarsDetails();

// ? 3. Implement a `BankAccount` class with deposit and withdraw methods.
// class BankAccount {
//   constructor(initialBalance = 0) {
//     this.balance = initialBalance;
//   }
//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//       console.log(
//         `You have deposited "${amount}Rs" and your new balance is "${this.balance}Rs"`
//       );
//     } else {
//       console.log(`Deposit amount must be positive`);
//     }
//   }
//   withdraw(amount) {
//     if (amount > 0 && amount <= this.balance) {
//       this.balance -= amount;
//       console.log(
//         `You have withdrawn "${amount}Rs" and you new balance is "${this.balance}Rs"`
//       );
//     } else if (amount > this.balance) {
//       console.log(
//         `Insuffient Funds. Your account balance is "${this.balance}Rs" and you are withdrawing "${amount}Rs"`
//       );
//     } else {
//       console.log(`Withdraw amount must be positive`);
//     }
//   }
// }

// const acc1 = new BankAccount();
// console.log(acc1);
// acc1.deposit(20);
// acc1.withdraw(20);

// ? 4. Create a `Rectangle` class with methods to calculate the area and perimeter.
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return this.width * this.height;
//   }

//   perimeter() {
//     return 2 * (this.width + this.height);
//   }
// }

// const rect1 = new Rectangle(20, 10);
// console.log("Area:", rect1.area());
// console.log("Perimeter:", rect1.perimeter());

// ? 5. Write a `Circle` class with a method to calculate the area.
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   area() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// const cir1 = new Circle(20);
// console.log("Area of circle:", cir1.area().toFixed(2));

// ? Inheritance
// ? 6. Extend the `Person` class to create a `Student` class with an additional property for the student ID.
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   printDetails() {
//     console.log(`My name is ${this.name} and i am ${this.age} years old`);
//   }
// }
// class Student extends Person {
//   constructor(stdID, name, age) {
//     super(name, age);
//     this.stdID = stdID;
//   }
//   printStudentDetails() {
//     console.log(
//       `Student ID: ${this.stdID}, Name: ${this.name}, Age: ${this.age}`
//     );
//   }
// }
// // const std1 = new Student("024", "abbaxi", 23);
// // const st2 = new Student("042", "Awais", 25);
// // std1.printStudentDetails();
// // st2.printStudentDetails();

// // ? 7. Create a `Teacher` class that extends `Person` and includes a property for the subject they teach.

// class Teacher extends Person {
//   constructor(name, age, taughtCourse) {
//     super(name, age);
//     this.taughtCourse = taughtCourse;
//   }
//   printTeacherDetails() {
//     console.log(
//       `Teacher name: ${this.name}, Teacher age: ${this.age}, Teacher taught courses: ${this.taughtCourse}`
//     );
//   }
// }

// const teacher1 = new Teacher("Rokhsar Api", 22, "Arabic");
// teacher1.printTeacherDetails();

// // ? 8. Write a `Dog` class that extends an `Animal` class with a method to make the dog bark.
// class Animal {
//   eat() {
//     console.log("Eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
// }
// class Dog extends Animal {
//   bark() {
//     console.log("Dog bark");
//   }
// }

// const dog1 = new Dog();
// dog1.bark();

// // ? 9. Create a `Shape` class and extend it to create `Triangle` and `Square` classes, each with methods to calculate area.
// class Shape {}

// class Triangle extends Shape {
//   calculateArea(base, height) {
//     return (1 / 2) * base * height;
//   }
// }

// class Square extends Shape {
//   calculateArea(side) {
//     return side ** 2;
//   }
// }

// const tri1 = new Triangle();
// console.log(tri1.calculateArea(4, 5));
// const sq1 = new Square();
// console.log(sq1.calculateArea(10));

// // ?  10. Implement an `Employee` class that extends `Person` and adds a property for job title and a method to display the job title.

// class Employee extends Person {
//   constructor(name, age, jobTitle) {
//     super(name, age);
//     this.jobTitle = jobTitle;
//   }
//   printEmployeeDetails() {
//     console.log(
//       `The employee name is ${this.name}, age is ${this.age} and the job title is ${this.jobTitle}`
//     );
//   }
// }

// const empl1 = new Employee("Abdul wahab", 21, "Ai engineer");
// empl1.printEmployeeDetails();

// ? ### Encapsulation
// ? 11. Implement a `PrivateCounter` class that uses private fields to keep track of a count value.

// class PrivateCounter {
//   #count = 0;
//   constructor(initialCount = 0) {
//     this.#count = initialCount;
//   }
//   increment() {
//     this.#count++;
//   }
//   decrement() {
//     this.#count--;
//   }
//   get getCount() {
//     return this.#count;
//   }
// }
// const counter1 = new PrivateCounter(5);
// console.log(counter1.getCount);
// counter1.increment();
// console.log(counter1.getCount);
// counter1.decrement();
// console.log(counter1.getCount);

// ? 12. Write a `Temperature` class with private fields for Celsius and Fahrenheit and public methods to convert between them.

// class Temperature {
//   #celsius = 0;

//   constructor(celsius = 0) {
//     this.#celsius = celsius;
//   }
//   celsiusToFahrenheit() {
//     return (9 / 5) * this.#celsius + 32;
//   }
//   fahrenheitToCelsius(fahrenheit) {
//     return (5 / 9) * (this.#celsius - 32);
//   }
//   setCelsius(celsius) {
//     this.#celsius = celsius;
//   }
//   setFahrenheit(fahrenheit) {
//     this.#celsius = (5 / 9) * (fahrenheit - 32);
//   }
//   get getCelsius() {
//     return this.#celsius;
//   }
//   get getFahrenheit() {
//     return (9 / 5) * this.#celsius + 32;
//   }
// }

// const temp1 = new Temperature(100);
// console.log(temp1.getFahrenheit);

// temp1.setFahrenheit(32);
// console.log(temp1.getCelsius);

// ? 13. Create a `SecureBankAccount` class with private fields for balance and methods to deposit and withdraw money.
// class SecureBankAccount {
//   #balance;
//   constructor(balance = 0) {
//     this.#balance = balance;
//   }
//   deposit(amount) {
//     this.#balance += amount;
//   }
//   withdraw(amount) {
//     this.#balance -= amount;
//   }
//   set setbalance(balance) {
//     this.#balance = +balance;
//   }
//   get getBalance() {
//     return this.#balance;
//   }
// }
// const acc1 = new SecureBankAccount(1000);
// acc1.deposit(400);
// console.log(acc1.getBalance);
// acc1.withdraw(700);
// console.log(acc1.getBalance);

// ? 14. Write a `User` class with private fields for username and password, and methods to validate the password;
// class User {
//   #username;
//   #password;
//   constructor(username, password) {
//     this.#username = username;
//     this.#password = password;
//   }
//   validatePassword(inputPassword) {
//     return this.#password === inputPassword;
//   }
//   set setPassword(newPassword) {
//     return (this.#password = newPassword);
//   }
//   get getPassword() {
//     return this.#password;
//   }
// }

// const user1 = new User("mudassir123", "mudassir");
// console.log(user1.validatePassword("mudassir"));
// user1.setPassword = "abbaxi";
// console.log(user1.validatePassword("abbaxi"));
// console.log(user1.getPassword);

// ? 15. Implement a `LibraryBook` class with private fields for title and author, and methods to borrow and return the book.

// class LibraryBook {
//   #title;
//   #author;
//   #isBorrowed;

//   constructor(title, author) {
//     this.#title = title;
//     this.#author = author;
//     this.#isBorrowed = false;
//   }
//   borrow() {
//     if (this.#isBorrowed) {
//       return `${this.#title} is already borrowed`;
//     } else {
//       this.#isBorrowed = true;
//       return `You have borrowed ${this.#title}`;
//     }
//   }
//   returnBook() {
//     if (this.#isBorrowed) {
//       this.#isBorrowed = false;
//       return `You have returned ${this.#title}`;
//     } else {
//       return `${this.#title} was not borrowed`;
//     }
//   }
//   get getTitle() {
//     return this.#title;
//   }
//   get getAuthor() {
//     return this.#author;
//   }
//   get isBorrowed() {
//     return this.#isBorrowed;
//   }
// }

// const book1 = new LibraryBook("The Sealed Necter", "Safiur Rahman Mubarakpuri");
// console.log(book1.getTitle);
// console.log(book1.getAuthor);
// console.log(book1.borrow());
// console.log(book1.returnBook());
// console.log(book1.returnBook());
// console.log(book1.getTitle);

// ? 16. Create a `Vehicle` class with a `move` method, and extend it to create `Car` and `Bicycle` classes that override the `move` method.

// class Vehicle {
//   move() {
//     console.log("Vehicle is moving");
//   }
// }
// class Car extends Vehicle {
//   move() {
//     console.log("Car is moving");
//   }
// }

// class Bicycle extends Vehicle {
//   move() {
//     console.log("Bicycle is moving");
//   }
// }
// const v1 = new Vehicle();
// v1.move();
// const c1 = new Car();
// c1.move();
// const b1 = new Bicycle();
// b1.move();

// ? 17. Write an `Instrument` class with a `play` method, and extend it to create `Guitar` and `Piano` classes that override the `play` method.
// class Instrument {
//   play() {
//     console.log("Instrument is playing");
//   }
// }
// class Guitar extends Instrument {
//   play() {
//     console.log("Guitar is playing");
//   }
// }
// class Piano extends Instrument {
//   play() {
//     console.log("Piano is playing");
//   }
// }

// const i1 = new Instrument();
// i1.play();
// const g1 = new Guitar();
// g1.play();
// const p1 = new Piano();
// p1.play();

// ? 18. Implement a `Payment` class with a `process` method, and extend it to create `CreditCardPayment` and `PaypalPayment` classes that override the `process` method.

// class Payment {
//   process() {
//     console.log("Payment");
//   }
// }
// class CreditCardPayment extends Payment {
//   process() {
//     console.log("CreditCardPayment");
//   }
// }

// class PaypalPayment extends Payment {
//   process() {
//     console.log("PaypalPayment");
//   }
// }
// const p1 = new Payment();
// p1.process();
// const c1 = new CreditCardPayment();
// c1.process();
// const pay1 = new PaypalPayment();
// pay1.process();

// ? 19. Create a `Notification` class with a `send` method, and extend it to create `EmailNotification` and `SMSNotification` classes that override the `send` method.

// class Notification {
//   send() {
//     console.log("Nofication is sent");
//   }
// }
// class EmailNotification extends Notification {
//   send() {
//     console.log("Email Notification is sent");
//   }
// }

// class SMSNotification extends Notification {
//   send() {
//     console.log("SMS Notification is sent");
//   }
// }
// const n1 = new Notification();
// n1.send();
// const e1 = new EmailNotification();
// e1.send();
// const s1 = new SMSNotification();
// s1.send();

// ? 20. Write a `Shape` class with a `draw` method, and extend it to create `Circle`, `Square`, and `Triangle` classes that override the `draw` method.

// class Shape {
//   draw() {
//     console.log("draw any shape");
//   }
// }
// class Circle extends Shape {
//   draw() {
//     console.log("circle ");
//   }
// }
// class Square extends Shape {
//   draw() {
//     console.log("Square");
//   }
// }
// class Triangle extends Shape {
//   draw() {
//     console.log("Triangle");
//   }
// }
// const s1 = new Shape();
// s1.draw();
// const c1 = new Circle();
// c1.draw();
// const sq1 = new Square();
// sq1.draw();
// const t1 = new Triangle();
// t1.draw();

// ? 21. Implement an abstract `Vehicle` class with an abstract `start` method, and create concrete subclasses `Car` and `Motorcycle`.

// class Vehicle {
//   constructor() {
//     if (new.target === Vehicle) {
//       throw new Error("Cannot instantiate an abstract class.");
//     }
//   }
//   // Abstract method
//   start() {
//     console.log("Abstract method 'start' must be implemented in subclass.");
//   }
// }
// class Car extends Vehicle {
//   start() {
//     console.log("Car is starting");
//   }
// }
// class Motorcycle extends Vehicle {
//   start() {
//     console.log("Motocycle is starting");
//   }
// }
// try {
//   const v1 = new Vehicle();
//   console.log(v1); // This will throw an error
// } catch (error) {
//   console.error(error.message); // "Cannot instantiate an abstract class."
// }
// const car1 = new Car();
// car1.start();
// const motor1 = new Motorcycle();
// motor1.start();

// ? 22. Create an abstract `Employee` class with an abstract `calculateSalary` method, and implement it in `FullTimeEmployee` and `PartTimeEmployee` classes.

// class Employee {
//   constructor() {
//     if (new.target === Employee) {
//       throw new Error("Cannot instansiate an abstract class");
//     }
//   }
//   calculateSalary() {
//     console.log(
//       "Abstract method 'calculateSalary' must be implemented in subclass."
//     );
//   }
// }
// class FullTimeEmployee extends Employee {
//   calculateSalary() {
//     console.log("Full Time Employee Salary is calculating");
//   }
// }
// class PartTimeEmployee extends Employee {
//   calculateSalary() {
//     console.log("Part Time Employee Salary is calculating");
//   }
// }
// try {
//   const emp1 = new Employee();
//   console.log(emp1);
// } catch (err) {
//   console.log(err);
// }

// const full1 = new FullTimeEmployee();
// full1.calculateSalary();
// const part1 = new PartTimeEmployee();
// part1.calculateSalary();

// ? 23. Write an abstract `Animal` class with an abstract `makeSound` method, and create concrete subclasses `Dog` and `Cat`.

// class Animal {
//   constructor() {
//     if (new.target === Animal) {
//       throw new Error("Cannot instansiate an abstract class");
//     }
//   }
//   makeSound() {
//     console.log("Abstract Method 'makeSound' must be implemented in subclass");
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log("Whow! Whow!");
//   }
// }
// class Cat extends Animal {
//   makeSound() {
//     console.log("Meow! Meow!");
//   }
// }
// try {
//   const animal1 = new Animal();
//   console.log(animal1);
// } catch (err) {
//   console.log(err);
// }
// const dog1 = new Dog();
// dog1.makeSound();
// const cat1 = new Cat();
// cat1.makeSound();
// ? 26. Write a `MathUtils` class with static methods to calculate the sum, difference, product, and quotient of two numbers.

// class MathUtils {
//   static sum(a, b) {
//     return a + b;
//   }
//   static product(a, b) {
//     return a * b;
//   }
//   static quotient(a, b) {
//     return a / b;
//   }
//   static difference(a, b) {
//     return a - b;
//   }
// }

// console.log(MathUtils.sum(3, 8));
// console.log(MathUtils.product(3, 8));
// console.log(MathUtils.difference(3, 8));
// console.log(MathUtils.quotient(3, 8));

// ? 27. Create a `Counter` class with a static property to keep track of the number of instances created.

class Counter {
  static count = 0;
  constructor() {
    Counter.count++;
  }
}

const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();
const c4 = new Counter();
const c5 = new Counter();
const c6 = new Counter();
const c7 = new Counter();
const c8 = new Counter();
const c9 = new Counter();

console.log(Counter.count);

// ? 28. Implement a `Logger` class with static methods for logging messages at different levels (info, warning, error).

class Logger {
  static info() {
    console.info("Hello");
  }
  static warning() {
    console.warn("Warning");
  }
  static error() {
    console.error("Error");
  }
}
Logger.info();
Logger.warning();
Logger.error();
