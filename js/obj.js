// const obj = {
//     a: 5,
//     b: 10,
//     xyz:100,
//     run : function() {
//         console.log(this.a + this.b);
//         return "run method";
//     },
//     test (){
//         // console.log(this.a + this.b);
//         return `"test method",${this.run()}`;
//     }
// };
// console.log(obj);
// console.log(obj.test());
// console.log(obj.run());
// console.log(obj.xyz);

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// console.log(!true); // false
// console.log(!false); // true

// const wakeUp = function (wakeUpTime) {
//   if (wakeUpTime <= "7:00 AM") {
//     return "Every is ok! ";
//   }
//   return "U will be late!";
// };

// console.log(wakeUp("6:00 AM")); // every is ok!
// console.log(wakeUp("8:00 AM")); // U will be late!

// const goToSchool = function (pocketMoney) {
//   if (pocketMoney >= 400) {
//     return "I will go to school by bus.";
//   }
//   return "I will go to school by foot.";
// };
// console.log(goToSchool(500)); // I will go to school by bus.
// console.log(goToSchool(300)); // I will go to school by foot.

// const result = function (marks) {
//   if (marks >= 80) {
//     return "Passed With Distinction!";
//   } else if (marks >= 40) {
//     return "Passed";
//   } else marks < 40;
//   {
//     return "Failed";
//   }
// };

// console.log(result(90)); // Passed With Distinction
// console.log(result(50)); // Passed
// console.log(result(30)); // Failed

// for (let i = 1; i < 5; i++) {
//   console.log("*");
//   console.log("**");
//   console.log("***");
// };

// for (
//   let i = (function () {
//     // console.log("first statement");
//     return 1;
//   })();
//   (function () {
//     const condition = i <= 5;
//     // console.log("second statement", condition);
//     return condition;
//   })();
//   i = (function () {
//     i = i + 1;
//     // console.log("third statement", i);
//     return i;
//   })()
// ) {
//   console.log("loop statement", i);
// };

// for (let i = 1; i <= 5; i++) {
//   console.log("loop statement", i);
//   for (let j = 1; j <= 5; j++) {
//     console.log("inner loop statement", j);
//     if (j === 3) {
//       break;
//     }
//   }
// };

// array for 10 fruits
// const fruits = [
//   "apple",
//   "banana",
//   "orange",
//   "grape",
//   "kiwi",
//   "mango",
//   "pineapple",
//   "strawberry",
//   "watermelon",
//   "blueberry",
// ];

// // // object for 10 students including name, age, grade and township
const students = [
  {
    name: "John",
    age: 20,
    grade: "A",
    township: "Downtown",
  },
  {
    name: "Jane",
    age: 22,
    grade: "B",
    township: "Uptown",
  },
  {
    name: "Mike",
    age: 21,
    grade: "C",
    township: "Midtown",
  },
  {
    name: "Sara",
    age: 19,
    grade: "A",
    township: "Suburb",
  },
  {
    name: "Tom",
    age: 23,
    grade: "B",
    township: "Downtown",
  },
  // {
  //   name: "Emma",
  //   age: 20,
  //   grade: "C",
  //   township: "Uptown",
  // },
  // {
  //   name: "Liam",
  //   age: 22,
  //   grade: "A",
  //   township: "Midtown",
  // },
  // {
  //   name: "Olivia",
  //   age: 21,
  //   grade: "B",
  //   township: "Suburb",
  // },
  // {
  //   name: "Noah",
  //   age: 19,
  //   grade: "C",
  //   township: "Downtown",
  // },
  // {
  //   name: "Ava",
  //   age: 23,
  //   grade: "A",
  //   township: "Uptown",
  // },
];

// for (let i of fruits){
//     console.log(i);
// };

// for (let i in fruits){
//     console.log(i, fruits[ i ]);
// };
// for (let i = 0; i < fruits.length; i++) {  
//     console.log(fruits[i]);
// };

for (let student of students) {
  // console.log(
  //   `Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}, Township: ${student.township}`
  // );
  for (let key of students) {
    console.log(key,students[key]);
  }
}