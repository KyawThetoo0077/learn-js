// console.log("Hello World");
// function findAge( birthYear) {
//     let currentYear = 2025;
//     let age = currentYear - birthYear;
//     return age;
// }
// console.log(findAge(1997));
// console.log(findAge(1990));
// console.log(findAge(2004));
// console.log(findAge(2000));

// let total = 0;

// function buy(productName,price,quantity) {
//     let cost = price * quantity;
//     total += cost;
//     return productName +" -"+ quantity +" -"+ cost;
// }

// function findTax(amount,percentage){
//     return amount * (percentage / 100);  
// }
    

// console.log(buy("apple", 250, 5));
// console.log(buy("banana", 1300, 2));   
// console.log(buy("orange", 100, 30));
// console.log("-----------------");

// console.log("Total - " + total);

// let tax = findTax(total,5);
// console.log("Tax - " + tax);

// console.log("-----------------");

// let netTotal = total + tax;
// console.log("Net Total - " + netTotal);

// if (netTotal > 10000){
//     console.log("You are eligible for a discount");
// }if (netTotal > 5000){
//     console.log("You are eligible for a 10% discount");
// }else (
//     console.log("You are not eligible for a discount")
// )

// function findEvenOdd(number){
//     let remainder = number % 2;
//     if (remainder == 0){
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// console.log(findEvenOdd(10));
// console.log(findEvenOdd(454));
// console.log(findEvenOdd(657));
// console.log(findEvenOdd(859));
// console.log(findEvenOdd(1000));

let result = "passed exams";

function examResult(subjects, marks){
    if (marks >= 40){
        return subjects + " - " + marks + " - Pass";
    }
    else {
        result = "failed exams";
        return "Failed";
    }
}
 let marks =[50, 60, 70, 80, 90, 100];

 let markObject = {
    "Maths": 50,
    "English": 60,
    "Science": 70,
    "History": 80,
    "Geography": 90,
    "Computer": 100
 };

 let subjects = ["Maths", "English", "Science", "History", "Geography", "Computer"];

 for (let i=0; i<subjects.length; i++){
    let subject = subjects[i];
    let mark = markObject[subject];
    console.log(examResult(subject, mark));
 }


// console.log(examResult("Maths", 45));
// console.log(examResult("English", 45)); 
// console.log(examResult("Science", 50));
// console.log(examResult("History", 60));
// console.log(examResult("Geography", 60));
// console.log(examResult("Computer", 70));

// console.log("------------------");

// console.log("objects - " + result);

// for (let i=1; i<=100; i+=2){
//     console.log(i);
// }

// for (let i=1000; i>=1; i-=5){
//     console.log(i);
// }