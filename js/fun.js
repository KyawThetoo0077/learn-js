// const run = function (x) {
//     return x * 2;
// }
// console.log(run(15));
// const buy = function (item,price,quantity) {
//     return item + " " + price + " " + quantity;
// }
// console.log(buy("apple", 2, 5));

// IIFE
// (function (x) {
//     console.log(x * 2);
// })(15);

// // IIFE with return
// (function (item, price, quantity) {
//     console.log(item + " " + price + " " + quantity);
// })("apple", 2, 5);

// // IIFE with return
// (function (item, price, quantity) {
//     console.log(item + " " + price + " " + quantity);
// })("banana", 3, 10);

// const x = function () {
//     return " this is x ";
// };
// const y = function () {
//     return x() + " this is y ";
// };

// console.log(x());
// console.log(y());

// code block
// {
//   let x = 10;
//   let y = 20;
//   console.log(x + y);
// }

// const results = [];
// let resultIndex = 0;

// const area = function ( width,breath) {
//     result = width * breath;
//     results[resultIndex++] ={ width, breath,area: result};
//     return `${result} sqft`;    
// }

// console.log(area(10, 20));
// console.log(area(15, 25));
// console.log(area(20, 30));
// console.log(area(25, 35));
// console.log(area(30, 40));
// console.log(area(35, 45));
// console.log(area(40, 50));
// console.table(results);

// const exchangeRate = {
//     USD: 4452.98 ,
//     EUR: 5077.05,
//     SGD : 3405.88,
// }

// const convert = function (amount, currency) {
//     const result = amount * exchangeRate[currency];
//     return `${result} MMK`;
// }

// console.log(convert(100, "USD"));
// console.log(convert(100, "EUR"));
// console.log(convert(100, "SGD"));

// const convert2 = function (amount, currency) {
//     const result = amount/exchangeRate[currency];
//     return `${result}`;
// }
// console.log(convert2(1000000, "USD"));
// console.log(convert2(1000000, "EUR"));
// console.log(convert2(1000000, "SGD"));

let total = 0;
const buy = function (item, price, quantity) {
    const result = price * quantity;
    total += result;
    return `${item} ${quantity} ${result} MMK`;
}
const buyingTax = function (total) {
    return total * 0.05;
}
const totalWithTax = function (total) {
    return total + buyingTax(total);
}

console.log(buy("apple", 65, 15));
console.log(buy("banana", 45, 10));
console.log(buy("orange", 37, 145));
console.log("------------------");
console.log(`Total: ${total} MMK`);
console.log(`Tax: ${buyingTax(total)} MMK`);
console.log("------------------");

console.log(`Total with Tax: ${totalWithTax(total)} MMK`);