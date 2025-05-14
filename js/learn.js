// function findAge(birthYear) {
//     let currentYear = 2025;
//     let age = currentYear - birthYear;
//     return age;
// }
// console.log(findAge(1990)); // Output: 35
// console.log(findAge(2000)); // Output: 25   
// console.log(findAge(1985)); // Output: 40

//buying products
//1. select product
//2. select quantity
//3. check price
//4. cost = price * quantity

function buying(productName,price,quantity) {
    let cost = price * quantity;
    total += cost;
   return productName + " - " + quantity +" - " +  cost;
}

let total = 0;

function findTax(amount,percentage) {
    let tax = (amount * percentage) / 100;
    return tax;
}

console.log(buying("apple", 2, 5)); // Output: You bought 5 apple(s) for a total of $10.
console.log(buying("banana", 1, 10)); // Output: You bought 10 banana(s) for a total of $10.    
console.log(buying("orange", 3, 4)); // Output: You bought 4 orange(s) for a total of $12.
console.log("-------------------------");
console.log("Total cost: $" + total); // Output: Total cost: $10


