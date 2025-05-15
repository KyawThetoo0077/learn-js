// function buy(productName, price, quantity) {
//   let cost = price * quantity;
//   return productName + " " + quantity + " " + "cost " + cost;
// }

// let totalCost = 0;
// function buy(productName, price, quantity) {
//   let cost = price * quantity;
//   totalCost += cost;
//   return productName + " " + quantity + " " + "cost " + cost;
// }

// function findTax(amount, percentage) {
//   let tax = amount * (percentage / 100);
//   return tax;
// }

// console.log(buy("apple", 200, 5));
// console.log(buy("orange", 349, 2));
// // console.log(buy("mango", 455, 3));
// // console.log(buy("grape", 255, 7));
// console.log("------------------");
// console.log("Total cost: " + totalCost);

// let tax = findTax(totalCost, 5);
// console.log("Tax" + "  " + tax);
// console.log("------------------");

// let totalCostWithTax = totalCost + tax;
// console.log("Total cost with tax: " + totalCostWithTax + " $ ");
// console.log("--------------------------------------------------");

// if (totalCostWithTax > 5000) {
//     console.log("You get a discount of 10%");
//     let discount = totalCostWithTax * (10 / 100);
//     console.log("Discount: " + discount);
//     let totalCostAfterDiscount = totalCostWithTax - discount;
//     console.log("Total cost after discount: " + totalCostAfterDiscount);
// }else {
//     console.log("You can't get a discount but you can get a gift");
//     console.log("Gift: " + "A bottle of water");
//     console.log("Total cost: " + totalCostWithTax);
//     console.log("--------------------------------------------------");
// }

// function findEvenOdd(number){
//     let reminder = number % 2;
//     if (reminder == 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// console.log(findEvenOdd(5));
// console.log(findEvenOdd(10));
// console.log(findEvenOdd(15));
// console.log(findEvenOdd(20));
// let result = "you are passed";
let totalScore = 0;
function examResult(sub,score){
    totalScore += score;
    if (score >= 40) {
        return sub + " " + score + " " + "Passed";
    } else {
        result = "you are failed!";
        return sub + " " + score + " " + "Failed";
    }
}

// console.log(examResult("Math", 50));
// console.log(examResult("English", 65));
// console.log(examResult("History", 70));
// console.log(examResult("Geography",75));
// console.log(examResult("Biology", 80));
// console.log("--------------------------------------------------");
// console.log("Total score: " + totalScore+" "+result);

let marks = [50, 65, 40, 75, 80,90];

let marksObject = {
  Math: 50,
  English: 65,
  History: 70,
  Biology: 80,
  Physics: 90,
  chem: 90,
};

let studentMarks = [
  {
    id: 1,
    subject: "Math",
    score: 50,
    result: "Passed",
  },
  {
    id: 2,
    subject: "English",
    score: 65,
    result: "Passed",
  },
  {
    id: 3,
    subject: "History",
    score: 70,
    result: "Passed",
  },
  {
    id: 4,
    subject: "Biology",
    score: 80,
    result: "Passed",
  },
  {
    id: 5,
    subject: "Physics",
    score: 90,
    result: "Passed",
  },
  {
    id: 6,
    subject: "Chemistry",
    score: 90,
    result: "Passed",
  },
];

let result = "Passed";

function findPassFail(marks)
{
    if (marks >= 40) {
        result = "Passed";
    } else {
        result = "Failed";
    }
}
for (let i = 0; i<marks.length; i++) {
    findPassFail(marks[i]);
    console.log(i , marks[i] + " " + result);
}
console.log("-----------------------------------------------");

for (i of studentMarks) {
    console.log(i.id + " " + i.subject + " " + i.score + " " + i.result);
}
console.log("-----------------------------------------------");
for (i in marksObject) {
    console.log(i + " " + marksObject[i], " " + result);

}
console.log("-----------------------------------------------");

//  looping
// for (let i = 1; i <= 100; i+= 5) {
//   console.log(i);
// }

// for (let i = 100; i >= 1; i-= 9) {
//   console.log(i);
// }