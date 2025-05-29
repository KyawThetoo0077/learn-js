// const car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020,
//   start: function () {
//     console.log(`The ${this.year} ${this.make} ${this.model} engine starts.`);
//   },
//   break: function () {
//     console.log(`The ${this.year} ${this.make} ${this.model} engin stop.`);
//   },
// };

// console.log(car.start());
// console.log(car.break());

// const bike = {
//   make: "Yamaha",
//   model: "MT-07",
//   year: 2021,
//   start: function () {
//     console.log(`Starting the ${this.year} ${this.make} ${this.model}`);
//   },
//   break: function () {
//     console.log(`Stopping the ${this.year} ${this.make} ${this.model}`);
//   },
// };
// console.log(bike.start());
// console.log(bike.break());

// class Vehicle {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   };

//   start() {
//     console.log(`The ${this.year} ${this.make} ${this.model} engine starts.`);
//   };

//   break() {
//     console.log(`The ${this.year} ${this.make} ${this.model} engine stops.`);
//   };
// };

// const car = new Vehicle("Toyota", "Corolla", 2020);
// console.log(car);
// car.start();
// car.break();

// const bike = new Vehicle("Yamaha", "MT-07", 2021);
// console.log(bike);
// bike.start();
// bike.break();

// const truck = new Vehicle("Ford", "F-150", 2022);
// console.log(truck);
// truck.start();
// truck.break();

// OOP concepts access modifiers
// class car {
//   static model = "Volvo";
//   year = '2022';
//   static make = 'Volvo';
//   static type = 'sedan';
//   #engine = 'V6';
//   start() {
//     console.log(`The ${this.year} ${this.make} ${this.model} engine starts.`);
//   }
// };
// console.log(car.model);
// console.log(car.make);
// console.log(car.type);
// const myCar = new car();
// console.log(myCar);
// myCar.start();

// const date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1); // Months are zero-indexed
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getDay()); // 0-6 (Sunday-Saturday)
// console.log(date.getTime()); // Timestamp in milliseconds since January 1, 1970
// console.log(date.toISOString()); // ISO 8601 format
// console.log(date.toLocaleDateString()); // Local date format
// console.log(date.toLocaleTimeString()); // Local time format
// console.log(date.toString()); // Full date and time string
// console.log(date.toUTCString()); // UTC date and time string
// console.log(date.toLocaleString()); // Local date and time string

// const math = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
//   multiply: function (a, b) {
//     return a * b;
//   },
//   divide: function (a, b) {
//     if (b === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     return a / b;
//   },
// };
// const calculator = {
//   add: math.add,
//   subtract: math.subtract,
//   multiply: math.multiply,
//   divide: math.divide,
// };
// console.log(calculator.add(5, 3)); // 8
// console.log(calculator.subtract(5, 3)); // 2
// console.log(calculator.multiply(5, 3)); // 15
// console.log(calculator.divide(5, 3)); // 1.6666666666666667

// class person {
//   constructor(name, age, skinColor) {
//     this.name = name;
//     this.age = age;
//     this.skinColor = skinColor;
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.My skin color is ${this.skinColor}.`);
//   }
// };
// const person1 = new person("John", 30, "brown");
// console.log(person1);
// person1.greet();
// const person2 = new person("Jane", 25, "white");
// console.log(person2);
// person2.greet();

// class student extends person {
//   constructor(name, age, skinColor, grade,className) {
//     super(name, age, skinColor);
//     this.grade = grade;
//     this.className = className;
//   }
//   study() {
//     console.log(`${this.name} is studying in ${this.className} class.`);
//   }
// };
// const student1 = new student("Alice", 20, "black", "A", "Math");
// console.log(student1);
// student1.greet();
// student1.study();

// class A{
//   a="A";
//   b="B";
//   c="C";
//   d(){
//     console.log("Method d from class A");
//   };
//   e(){
//     console.log("Method e from class A");
//   };
// };

// class B extends A{
//   x="A1";
//   y="B1";
//   z="C1";
// };

// const objA = new A();
// console.log(objA); // A
// const objB = new B();
// console.log(objB); // B

// class free {
//   repo= "Unlimited";
//   storage = "500MB";
//   push() {
//     console.log("Free plan push");
//   }
// }
// class team extends free {
//     codeSpace = "true";
// }

// class enterPrise extends team{
//     security = "true";
//     support = "true";
// }

// const freePlan = new free();
// const teamPlan = new team();
// const enterPrisePlan = new enterPrise();
// console.log(freePlan); // free plan
// console.log(teamPlan); // team plan 
// console.log(enterPrisePlan); // enterPrise plan

// getters and setters methods
// class bankAccount {
//   constructor(accountNumber, balance) {
//     this.accountNumber = accountNumber;
//     this._balance = balance; // Using underscore to indicate private property
//   }

//   get balance() {
//     return this._balance;
//   }

//   set balance(amount) {
//     if (amount < 0) {
//       console.log("Balance cannot be negative.");
//     } else {
//       this._balance = amount;
//     }
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this._balance += amount;
//       console.log(`Deposited: $${amount}. New balance: $${this._balance}`);
//     } else {
//       console.log("Deposit amount must be positive.");
//     }
//   }

//   withdraw(amount) {
//     if (amount > 0 && amount <= this._balance) {
//       this._balance -= amount;
//       console.log(`Withdrew: $${amount}. New balance: $${this._balance}`);
//     } else {
//       console.log("Insufficient funds or invalid withdrawal amount.");
//     }
//   }
// }
// const myAccount = new bankAccount("123456789", 1000);
// console.log(myAccount);
// myAccount.deposit(500); // Deposited: $500. New balance: $1500
// myAccount.withdraw(200); // Withdrew: $200. New balance: $1300
// console.log(myAccount.balance); // 1300
// myAccount.balance = 2000; // Setting balance using setter
// console.log(myAccount.balance); // 2000

// class bankAccount{
//     #money = 0;
//     transition(massage){
//         console.log(massage);
//     }

//     checkBalance(){
//         this.transition(`Your current balance is $${this.#money} MMK`);
//         return this.#money;
//     }
//     deposit(amount){
//         if(amount > 0){
//             this.#money += amount;
//             this.transition(`You have deposited $${amount} MMK`);
//         } else {
//             this.transition("Deposit amount must be positive.");
//         }
//     }
//     withdraw(amount){
//         if(amount > 0 && amount <= this.#money){
//             this.#money -= amount;
//             this.transition(`You have withdrawn $${amount} MMK`);
//         } else {
//             this.transition("Insufficient funds or invalid withdrawal amount.");
//         }
//     }
//     transfer(amount, recipientAccount){
//         if(amount > 0 && amount <= this.#money){
//             this.#money -= amount;
//             recipientAccount.deposit(amount);
//             this.transition(`You have transferred $${amount} MMK to the recipient account`);
//         } else {
//             this.transition("Insufficient funds or invalid transfer amount.");
//         }
//     }
//     get balance() {
//         return this.#money;
//     }
//     set balance(amount) {
//         if (amount < 0) {
//             this.transition("Balance cannot be negative.");
//         } else {
//             this.#money = amount;
//         }
//     }
//     getMoney() {
//         return this.#money;
//     }
// };
// const myAccount = new bankAccount();
// console.log(myAccount);
// myAccount.deposit(1000); // You have deposited $1000 MMK
// myAccount.withdraw(500); // You have withdrawn $500 MMK
// console.log(myAccount.checkBalance()); // Your current balance is $500 MMK  
// myAccount.transfer(200, new bankAccount()); // You have transferred $200 MMK to the recipient account
// console.log(myAccount.checkBalance()); // Your current balance is $300 MMK
// myAccount.balance = 1000; // Setting balance using setter
// console.log(myAccount.checkBalance()); // Your current balance is $1000 MMK
// myAccount.deposit(500); // You have deposited $500 MMK
// console.log(myAccount.getMoney()); // 1500
// myAccount.withdraw(2000); // Insufficient funds or invalid withdrawal amount.
// console.log(myAccount.checkBalance()); // Your current balance is $1500 MMK
// myAccount.balance = -100; // Balance cannot be negative.
// console.log(myAccount.checkBalance()); // Your current balance is $1500 MMK
// myAccount.deposit(-500); // Deposit amount must be positive.

// console.log(myAccount.checkBalance()); // Your current balance is $1500 MMK
// myAccount.withdraw(1500); // You have withdrawn $1500 MMK
// console.log(myAccount.checkBalance()); // Your current balance is $0 MMK
// myAccount.transfer(100, new bankAccount()); // Insufficient funds or invalid transfer amount.
// console.log(myAccount.checkBalance()); // Your current balance is $0 MMK
// myAccount.balance = 500; // Setting balance using setter
// console.log(myAccount.checkBalance()); // Your current balance is $500 MMK
// myAccount.deposit(200); // You have deposited $200 MMK
// console.log(myAccount.checkBalance()); // Your current balance is $700 MMK
