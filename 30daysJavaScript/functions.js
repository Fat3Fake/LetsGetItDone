//REGULAR FUNCTION

//Unlimited number of parameters in regular function
//Any thing we passed as argument in the function can be accessed from arguments object inside the functions.

function sumAllNums() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173\

//Unlimited number of parameters in arrow function
//Any thing we passed as argument in the function can be accessed as array in the arrow function.
//To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name.

// Let us access the arguments object

const sumAllNums1 = (...args) => {
	// console.log(arguments), arguments object not found in arrow function
	// instead we use a parameter followed by spread operator (...)
	console.log(args);
};

sumAllNums1(1, 2, 3, 4);
// [1, 2, 3, 4]

// function declaration

const sumAllNums2 = (...args) => {
	let sum = 0;
	for (const element of args) {
		sum += element;
	}
	return sum;
};

console.log(sumAllNums2(1, 2, 3, 4)); // 10
console.log(sumAllNums2(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums2(15, 20, 30, 25, 10, 33, 40)); // 173

//Anonymous Function

//Anonymous function or without name

const anonymousFun = function () {
	console.log(
		"I am an anonymous function and my value is stored in anonymousFun"
	);
};

//Expression Function

//Expression functions are anonymous functions
//After we create a function without a name and we assign it to a variable.
//To return a value from the function we should call the variable.

// Function expression
const square = function (n) {
	return n * n;
};

console.log(square(2)); // -> 4

//Self Invoking Functions

//Self invoking functions are anonymous functions which do not need to be called to return a value.

(function (n) {
	console.log(n * n);
})(2); // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
	return n * n;
})(10);

console.log(squaredNum);

//Arrow Function

//Arrow function uses arrow instead of the keyword function to declare a function.

// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square1(n) {
  return n * n
}

console.log(square1(2)) // 4

const square2 = n => {
  return n * n
}

console.log(square(2))  // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square3 = n => n * n  // -> 4

//Function with default parameters

//Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used.
//Both function declaration and arrow function can have a default value or values.

// syntax
// Declaring a function
function functionName(param = `value`) {
  return param
}

// Calling function
functionName()

function greetings(name = "Peter") {
	let message = `${name}, welcome to 30 Days Of JavaScript!`;
	return message;
}

console.log(greetings());
console.log(greetings("Asabeneh"));



