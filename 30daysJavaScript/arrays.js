// Array methods

const arr = Array(); // creates an an empty array
console.log(arr);

const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues); // [empty x 8]

const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

arr.concat(); //concatenate two arrays.
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

arr.indexOf(); //getting index of an element.

arr.lastIndexOf(); //getting index of the last element of array

arr.includes(); //check if item exist in array, returns true/false

arr.toString(); //converts array to string

arr.join(); //joins the array by argument, returns string

arr.slice(); //cut out a multiple items in range. It takes two parameters:starting and ending position.

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice()); // -> it copies all  item
console.log(numbers.slice(0)); // -> it copies all  item
console.log(numbers.slice(0, numbers.length)); // it copies all  item
console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position

arr.splice(); // It takes three parameters:Starting position, number of times to be removed and number of items to be added.

numbers.splice();
console.log(numbers); // -> remove all items

numbers.splice(0, 1);
console.log(numbers); // remove the first item

arr.push(); // adding item in the end.

arr.pop(); //Removing item in the end.

arr.shift(); // removes first element of the array

arr.unshift(); // adds new element in the beginning of the array

arr.reverse(); //reverse the order of an array

arr.sort(); // sorting elements on the array

