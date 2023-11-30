function checkSeason(month) {
	if (month === 12 || month === 1 || month === 2) {
		return `winter`;
	}
	if (month === 3 || month === 4 || month === 5) {
		return `spring`;
	}
	if (month === 6 || month === 7 || month === 8) {
		return `summer`;
	}
	if (month === 9 || month === 10 || month === 11) {
		return `autumn`;
	}
	if (month <= 0 || month > 12) {
		return `ti sho daun??`;
	}
}
console.log(checkSeason(1));

const mathMax = (...numbs) => {
	let sorted = numbs.sort((a, b) => b - a);
	return sorted[0];
};
console.log(mathMax(0, 10, 5));

function printArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
	return ``;
}
console.log(printArray([1, 2, `banana`, 3]));

function reverseArray(arr) {
	let result = [];
	while (arr.length) {
		let lastElement = arr.pop();
		result.push(lastElement);
	}
	return result;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

function capitalizeArray(arr) {
	let result = [];
	for (const iterator of arr) {
		result.push(iterator.toUpperCase());
	}
	return result;
}
console.log(capitalizeArray([`a`, `w`, `h`, `j`]));

function removeItem(arr, index) {
	if (index < 0 || index >= arr.length) {
		return `index is not valid`;
	}
	arr.splice(index, 1);
	return arr;
}
console.log(removeItem([`a`, `w`, `h`, `j`], 2));

function sumOfNumbers(number) {
	let result = 0;
	for (let i = 0; i <= number; i++) {
		result += i;
	}
	return result;
}
console.log(sumOfNumbers(4));

function sumOfOdds(number) {
	let result = 0;
	for (let i = 0; i <= number; i++) {
		if (i % 2 !== 0) {
			result += i;
		}
	}
	return result;
}
console.log(sumOfOdds(10));

function evensAndOdds(number) {
	let evensCounter = 0;
	let oddsCounter = 0;
	for (let i = 0; i <= number; i++) {
		if (i % 2 === 0) {
			evensCounter += 1;
		} else {
			oddsCounter += 1;
		}
	}
	return `The number of odds is ${oddsCounter}\nThe number of evens is ${evensCounter}`;
}
console.log(evensAndOdds(100));

const sum = (...numbers) => {
	let result = 0;
	for (const iterator of numbers) {
		result += iterator;
	}
	return result;
};
console.log(sum(1, 2, 3, 4));

function randomUserIp() {
	let randomNumber = () => Math.floor(Math.random() * 256);
	return `${randomNumber()}.${randomNumber()}.${randomNumber()}.${randomNumber()}`;
}
console.log(randomUserIp());

function randomHexaNumberGenerator() {
	const getRandomHexDigit = () => Math.floor(Math.random() * 16).toString(16);

	const randomHexNumber = `#${getRandomHexDigit()}${getRandomHexDigit()}${getRandomHexDigit()}${getRandomHexDigit()}${getRandomHexDigit()}${getRandomHexDigit()}`;

	return randomHexNumber;
}
console.log(randomHexaNumberGenerator());

function userIdGenerator() {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let userId = "";

	for (let i = 0; i < 7; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		userId += characters.charAt(randomIndex);
	}

	return userId;
}
console.log(userIdGenerator());

function userIdGeneratedByUser(chars, numberOf) {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	let generatedIds = "";
	for (let i = 0; i < numberOf; i++) {
		let userId = ``;
		for (let i = 0; i < chars; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			userId += characters.charAt(randomIndex);
		}
		generatedIds += userId + `\n`;
	}
	return generatedIds;
}
console.log(userIdGeneratedByUser(5, 5));

function shuffleArray(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		let index = Math.floor(Math.random() * arr.length);
		if (result.includes(arr[index])) {
			i--;
			continue;
		} else {
			result.push(arr[index]);
		}
	}
	return result;
}
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function factorial(number) {
	if (number === 0) {
		return 1;
	}
	return number * factorial(number - 1);
}
console.log(factorial(5));

function sumOfArrayItems(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] !== `number`) {
			return `there must be numbers on your array`;
		}
		sum += array[i];
	}
	return sum;
}
console.log(sumOfArrayItems([1, 2, 3, 4, 5, 6, 7, 8]));

function average(array) {
	if (array.every((item) => typeof item === "number")) {
		let sum = array.reduce((sum, cur) => sum + cur, 0);
		return sum / array.length;
	}else {
		return `there must be numbers on your array`;
	}
	
}
console.log(average([1, 2, 3, 4, 5, 6, 7, 8]));

function modifyArray(array) {
	if (array.length < 5) {
		return `item not found`
	}
	result = [...array]
	let modifyed = result[4].toUpperCase()
	result.splice(4, 1, modifyed)
	return result
}
console.log(
	modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

function unique(array) {
	let arr = []
	for (let i = 0; i < array.length; i++) {
		if (arr.includes(array[i])) {
			return `there is non unique items in array`
		}else {
			arr.push(array[i])
		}
	}
	return `the items in array is unique`
}
console.log(unique([1, 2, `tomato`, 4, 5, 7, 8]));

function isSameDataType(array) {
	if (array.length < 2) {
		return `array must contain two and more items`
	}
	let type = typeof array[0]
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === type) {
			continue
		}else {
			return `there is items with different data types in your array`
		}
	}
	return `all items in your array are the same data type`
}
console.log(isSameDataType([1, 2, 3, 4, 5, 6]))

function sevenRandomNumbers() {
	let result = []
	let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	for (let i = 0; i < numbers.length; i++) {
		let index = Math.floor(Math.random() * numbers.length - 1);
		if (result.includes(numbers[index]) || numbers[index] === undefined) {
			i--
			continue
		}else {
			result.push(numbers[index])
		}
		if (result.length === 7) {
			return result
		}
	}
}
console.log(sevenRandomNumbers())

