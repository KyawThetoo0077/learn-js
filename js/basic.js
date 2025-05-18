// let x;
// let y;

// x = 5;
// y = 10;
// console.log(x + y); // 15

// const PI = 3.14;
// const RADIUS = 5;
// const area = PI * RADIUS * RADIUS;
// console.log(area); // 78.5

// let myName = "Kyaw Thet Oo";
// let myAge = 28;
// let myHobby = "Coding";
// let myInfo = `My name is ${myName}, I am ${myAge} years old and I love ${myHobby}.`;
// console.log(myInfo); // My name is Kyaw Thet Oo, I am 28 years old and I love Coding.

// const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// fruits[3] = "Mango"; // Change "Cherry" to "Mango"

// console.log(fruits); // ["Apple", "Banana", "Mango", "Date", "Elderberry"]
// console.log(fruits[0]); // "Apple"
// console.log(fruits[1]); // "Banana"
// console.log(fruits[2]); // "Mango"
// console.log(fruits[3]); // "Date"
// console.log(fruits[4]); // "Elderberry"

// const arr =[];

// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;

// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(arr.length); // [1, 2, 3, 4, 5]

// objects
// const person = {
//   name: "john",
//   age: 28,
//   hobby: "Coding",
//   jop: "Software Engineer",
//   address: {
//     city: "Yangon",
//     country: "Myanmar",
//   },
// };
// person.relationship = "Single"; // Add a new property

// console.log(person.name); // Kyaw Thet Oo
// console.log(person.age); // 28
// console.log(person.hobby); // Coding
// console.log(person.relationship); // Single
// console.log(person.address.country); // Myanmar
// console.log(person.address.city); // Yangon

// const person2 = {};

// person2.name = "john";
// person2.age = 28;
// person2.hobby = "Coding";
// person2.jop = "Software Engineer";
// person2.address = {};
// person2.address.city = "Yangon";
// person2.address.country = "Myanmar";
// person2.relationship = "Single"; // Add a new property

// console.log(person2); // Kyaw Thet Oo

// const name = "Mg Mg";
// let age = 15;
// let township = "Kyauk Myaung";
// let pocketMoney = 200;
// let buyOrangePrice = 50;
// pocketMoney -= buyOrangePrice;
// const bag = ["Myanmar Book","English Book", "Biology Book"];
// let pen = false;
// let smokeMgMgFriend = true;
// let smokeMgMg = false;

// console.log(pocketMoney); // 150
// console.log(bag); // ["Myanmar Book","English Book", "Biology Book"]

// const MgMg = {
//   name: "Mg Mg",
//   age: 15,
//   township: "Kyauk Myaung",
//   pocketMoney: 200,
//   buyOrangePrice: 50,
//   bag: ["Myanmar Book","English Book", "Biology Book"],
//   pen: false,
//   smokeMgMgFriend: true,
//   smokeMgMg: false,
// };

// const KyawKyaw = {
//   name: "Kyaw Kyaw",
//   age: 15,
//   township: "Kyauk Myaung",
//   bag: ["Myanmar Book","English Book", "Biology Book"],
//   smokeKyawKyaw: true,
// };

// const ZawZaw = {
//   name: "Zaw Zaw",
//   age: 15,
//   township: "Kyauk Myaung",
//   bag: ["Myanmar Book","English Book", "Biology Book"],
//   smokeZawZaw: true,
// };
// const MyaMya = {
//   name: "Mya Mya",
//   age: 15,
//   township: "Kyauk Myaung",
//   bag: ["Myanmar Book","English Book", "Biology Book"],
//   smokeAyeAye: true,
// };

const MgMgAndFriends = [
  {
    name: "Mg Mg",
    age: 15,
    township: "Kyauk Myaung",
    // pocketMoney: 200,
    // buyOrangePrice: 50,
    // bag: ["Myanmar Book", "English Book", "Biology Book"],
    // pen: false,
    // smokeMgMgFriend: true,
    smoke: false,
  },
  {
    name: "Kyaw Kyaw",
    age: 17,
    township: "Hlaing",
    // bag: ["Myanmar Book", "English Book", "Biology Book"],
    smoke: true,
  },
  {
    name: "Zaw Zaw",
    age: 15,
    township: "Hlaing Thar Yar",
    // bag: ["Myanmar Book", "English Book", "Biology Book"],
    smoke: true,
  },
  {name: "Mya Mya",
    age: 15,
    township: "Sanchaung",
    // bag: ["Myanmar Book", "English Book", "Biology Book"],
    smoke: true,
  },
];
// console.log(MgMgAndFriends[0].name); // Mg Mg
// console.log(MgMgAndFriends[1].name); // Kyaw Kyaw   
// console.log(MgMgAndFriends[2].name); // Zaw Zaw
// console.log(MgMgAndFriends[3].name); // Mya Mya

console.table(MgMgAndFriends); // Myanmar Book
console.log(MgMgAndFriends.length); 
// console.log(MgMgAndFriends[0].bag); // ["Myanmar Book", "English Book", "Biology Book"]
// console.log(MgMgAndFriends[1]);

function triangle(){
  console.log("*");
  console.log("**");
  console.log("***");
  console.log("****");
  console.log("*****");
  return "Hello World"; 
}
console.log(triangle()); // Hello World

function area(width=0, height=0){
  console.log(width);
  console.log(height);
  // console.log(width * height);
  let area = width * height;
  return area;
}

console.log(area());
console.log(area(10,20)); // 200
console.log(area(5,10)); // 50
console.log(area(34,54)); // 1836

