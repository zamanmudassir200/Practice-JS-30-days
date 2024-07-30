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
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printDetails() {
    console.log(`My name is ${this.name} and i am ${this.age} years old`);
  }
}
class Student extends Person {
  constructor(stdID, name, age) {
    super(name, age);
    this.stdID = stdID;
  }
  printStudentDetails() {
    console.log(
      `Student ID: ${this.stdID}, Name: ${this.name}, Age: ${this.age}`
    );
  }
}
// const std1 = new Student("024", "abbaxi", 23);
// const st2 = new Student("042", "Awais", 25);
// std1.printStudentDetails();
// st2.printStudentDetails();

// ? 7. Create a `Teacher` class that extends `Person` and includes a property for the subject they teach.

class Teacher extends Person {
  constructor(name, age, taughtCourse) {
    super(name, age);
    this.taughtCourse = taughtCourse;
  }
  printTeacherDetails() {
    console.log(
      `Teacher name: ${this.name}, Teacher age: ${this.age}, Teacher taught courses: ${this.taughtCourse}`
    );
  }
}

const teacher1 = new Teacher("Rokhsar Api", 22, "Arabic");
teacher1.printTeacherDetails();

// ? 8. Write a `Dog` class that extends an `Animal` class with a method to make the dog bark.
class Animal {
  eat() {
    console.log("Eat");
  }
  sleep() {
    console.log("sleep");
  }
}
class Dog extends Animal {
  bark() {
    console.log("Dog bark");
  }
}

const dog1 = new Dog();
dog1.bark();

// ? 9. Create a `Shape` class and extend it to create `Triangle` and `Square` classes, each with methods to calculate area.
class Shape {}

class Triangle extends Shape {
  calculateArea(base, height) {
    return (1 / 2) * base * height;
  }
}

class Square extends Shape {
  calculateArea(side) {
    return side ** 2;
  }
}

const tri1 = new Triangle();
console.log(tri1.calculateArea(4, 5));
const sq1 = new Square();
console.log(sq1.calculateArea(10));

// ?  10. Implement an `Employee` class that extends `Person` and adds a property for job title and a method to display the job title.

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }
  printEmployeeDetails() {
    console.log(
      `The employee name is ${this.name}, age is ${this.age} and the job title is ${this.jobTitle}`
    );
  }
}

const empl1 = new Employee("Abdul wahab", 21, "Ai engineer");
empl1.printEmployeeDetails();

// ? ### Encapsulation
// ? 11. Implement a `PrivateCounter` class that uses private fields to keep track of a count value.
