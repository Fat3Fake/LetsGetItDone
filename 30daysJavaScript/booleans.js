//Comparison Operators

console.log(3 > 2); // true, because 3 is greater than 2
console.log(3 >= 2); // true, because 3 is greater than 2
console.log(3 < 2); // false,  because 3 is greater than 2
console.log(2 < 3); // true, because 2 is less than 3
console.log(2 <= 3); // true, because 2 is less than 3
console.log(3 == 2); // false, because 3 is not equal to 2
console.log(3 != 2); // true, because 3 is not equal to 2
console.log(3 == "3"); // true, compare only value
console.log(3 === "3"); // false, compare both value and data type
console.log(3 !== "3"); // true, compare both value and data type
console.log(3 != 3); // false, compare only value
console.log(3 !== 3); // false, compare both value and data type
console.log(0 == false); // true, equivalent
console.log(0 === false); // false, not exactly the same
console.log(0 == ""); // true, equivalent
console.log(0 == " "); // true, equivalent
console.log(0 === ""); // false, not exactly the same
console.log(1 == true); // true, equivalent
console.log(1 === true); // false, not exactly the same
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, not equal
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false

//Logical Operators

// && ampersand operator example

const check = 4 > 3 && 10 > 5; // true && true -> true
const check1 = 4 > 3 && 10 < 5; // true && false -> false
const check2 = 4 < 3 && 10 < 5; // false && false -> false

// || pipe or operator, example

const check3 = 4 > 3 || 10 > 5; // true  || true -> true
const check4 = 4 > 3 || 10 < 5; // true  || false -> true
const check5 = 4 < 3 || 10 < 5; // false || false -> false

//! Negation examples

let check6 = 4 > 3; // true
let check7 = !(4 > 3); //  false
let isLightOn = true;
let isLightOff = !isLightOn; // false
let isMarried = !false; // true

//Increment Operator

function increment() {
	//Pre-increment
	let count = 0;
	console.log(++count); // 1
	console.log(count); // 1

	//Post-increment
	let count1 = 0;
	console.log(count1++); // 0
	console.log(count1); // 1
}

//Decrement Operator

function decrement() {

	//Pre - decrement;
	let count = 0;
	console.log(--count); // -1
	console.log(count); // -1

	//Post - decrement;
	let count1 = 0;
	console.log(count1--); // 0
	console.log(count1); // -1
}

//Ternary Operators

let number = 5;
number > 0
	? console.log(`${number} is a positive number`) //5 is a positive number
	: console.log(`${number} is a negative number`);
number = -5;

number > 0
	? console.log(`${number} is a positive number`)
	: console.log(`${number} is a negative number`); //-5 is a negative number

    