// console.log("Built-in Object");
// const d = new Date();

// // d.setHours(d.getHours() + 300);
// // d.setMonth(d.getMonth() + 4);
// const totalSwdCourseHours = 50;
// const learningHoursPerDay = 2;
// const totalDays = totalSwdCourseHours / learningHoursPerDay;
// console.log(`Total days to complete the course: ${totalDays} Days`);
// console.log(`Current Date: ${d}`);


// console.log(d);
// const date = new Date(1997,7,4);
// date.setDate(date.getDate() + 100);
// console.log(date); // [object Date]

// number
// console.log(typeof 10); // number
// console.dir(Number);
// const num = 746.553;
// console.log(num)
// console.log(num.toExponential());
// console.log(num.toFixed());
// console.log(num.toFixed(2)); // 746.55
// console.log(Number.parseFloat(num.toFixed(3))); // 747
// console.log(num.toPrecision(5)); // 746.553

// const st = new String("Hello World");
// console.log(st); // [String: 'Hello World']
// console.log(st.length); // 11
// console.log(st.toUpperCase()); // HELLO WORLD
// console.log(st.toLowerCase()); // hello world
// console.log(st.charAt(0)); // H
// console.log(st.charAt(6)); // W
// console.log(st.indexOf("World")); // 6

// console.log(st.split(" ")); // [ 'Hello', 'World' ]
// console.log(st.split("l")); // [ 'He', 'lo Wor', 'd' ]
// console.log(st.split("H")); // [ '', 'ello World' ]
// console.log(st.split("o")); // Hello
// console.log(st.split("")); // [ 'Hello', 'World' ]

// const obj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// console.log(Object.keys(obj)); // [object Object]
// console.log(Object.values(obj)); // [ 'John', 30, 'New York' ]

// console.log(Object.entries(obj)); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]
// console.log(Object.getOwnPropertyNames(obj)); // [ 'name', 'age', 'city' ]
// console.log(Object.getOwnPropertySymbols(obj)); // []

// console.log(Object.getOwnPropertyDescriptor(obj, 'name')); // { value: 'John', writable: true, enumerable: true, configurable: true }

// console.log(Object.hasOwn(obj, 'name')); // true
// console.log(Object.hasOwn(obj, 'country')); // false

// function statement
// function calculate(x, y) {
//     return x+y;
// };

// // function expression
// const calculate = function(a, b) {
//     return a + b;
// };
// // function declaration
function calculate(a, b) {
    return a + b;
}

console.log(calculate(324,363));