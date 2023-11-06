function removeChar(str) {
	//удаляет первый и последний символ стринги
	return str.slice(1, -1);
}

function makeNegative(num) {
	if (num > 0) {
		return num * -1;
	}
	return num;
}

function XO(str) {
	count_x = 0;
	count_o = 0;
	s = str.split(``);
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "x") {
			count_x++;
		} else if (s[i] === "o") {
			count_o++;
		}
	}

	return count_x == count_o;
}

function findSmallestInt(args) {
	return args.sort((a, b) => a - b).shift();
}

function evenOrOdd(number) {
	let num = Math.ceil(number / 2) * 2;
	if (num === number) {
		return "Even";
	} else {
		return "Odd";
	}
}

function paperwork(n, m) {
	let result = n * m;
	if (n <= 0) {
		return 0;
	}
	if (m <= 0) {
		return 0;
	}
	return result;
}

function bmi(weight, height) {
	let bmi = weight / (height * height);
	return bmi <= 18.5
		? "Underweight"
		: bmi <= 25.0
		? "Normal"
		: bmi <= 30.0
		? "Overweight"
		: "Obese";
}

function fakeBin(x) {
	let input = x.split(``);
	let output = [];
	for (let i = 0; i < input.length; i++) {
		input[i] >= 5 ? output.push(`1`) : output.push(`0`);
	}
	return output.join(``);
}

function booleanToString(b) {
	return b.toString();
}

function lovefunc(flower1, flower2) {
	return (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
		(flower1 % 2 !== 0 && flower2 % 2 === 0)
		? true
		: false;
}

function betterThanAverage(classPoints, yourPoints) {
	let avarage = 0;
	for (let i = 0; i < classPoints.length; i++) {
		avarage += classPoints[i];
	}
	return avarage / classPoints.length <= yourPoints ? true : false;
}

function positiveSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		arr[i] > 0 ? (sum += arr[i]) : i;
	}
	return sum;
}

function countBy(x, n) {
	let result = [];

	for (let i = 1; i <= n; i++) {
		result.push(x * i);
	}

	return result;
}

function addBinary(a, b) {
	const sum = a + b;
	return sum.toString(2);
}

const haystack = [
	"3",
	"123124234",
	undefined,
	"needle",
	"world",
	"hay",
	2,
	"3",
	true,
	false,
];
function findNeedle(haystack) {
	return "found the needle at position " + haystack.indexOf("needle");
}

function findShort(s) {
	const words = s.split(" ");

	let shortestLength = Infinity;

	for (const word of words) {
		const wordLength = word.length;
		if (wordLength < shortestLength) {
			shortestLength = wordLength;
		}
	}

	return shortestLength;
}

function grow(x) {
	//перемножает элементы массива между собой по очереди

	result = 1;
	for (let index = 0; index < x.length; index++) {
		result = x[index] * result;
	}
	return result;
}

function sum(numbers) {
	if (numbers.length === 0) {
		return 0;
	}
	result = 0;
	for (let index = 0; index < numbers.length; index++) {
		result = result + numbers[index];
	}
	return result;
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	return distanceToPump / mpg <= fuelLeft ? true : false;
};

var countSheep = function (num) {
	let murmur = "";
	for (let i = 1; i <= num; i++) {
		murmur += i + " sheep...";
	}
	return murmur;
};

const names = ["Alex", "Jacob", "Mark"];
function likes(names) {
	return names.length === 0
		? "no one likes this"
		: names.length === 1
		? `${names[0]} likes this`
		: names.length === 2
		? `${names[0]} and ${names[1]} like this`
		: names.length === 3
		? `${names[0]}, ${names[1]} and ${names[2]} like this`
		: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

function isPangram(string) {
	str = string.toLowerCase().replace(/[^a-z]/g, "");
	const letters = new Set();
	for (let i = 0; i < str.length; i++) {
		letters.add(str[i]);
	}
	return letters.size === 26;
}

const result = [];

function uniqueInOrder(sequence) {
	const result = [];

	for (let i = 0; i < sequence.length; i++) {
		
		if (sequence[i] !== sequence[i + 1]) {
			result.push(sequence[i]);
		}
	}

	return result;
}

function past(h, m, s) {
	let hour = h * 3600000;
	let minute = m * 60000;
	let second = s * 1000;
	
	return hour + minute + second
}
let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function countPositivesSumNegatives(input) {
	if (!input || input.length === 0) {
		return [];
	}

	let countPositives = 0;
	let sumNegatives = 0;

	for (let num of input) {
		if (num > 0) {
			countPositives++;
		} else if (num < 0) {
			sumNegatives += num;
		}
	}

	return [countPositives, sumNegatives];
	
}

function maps(x) {
	return x.map((item, i) => {
		return item * 2
	});
}
let numbers = [1, 2, 3];
