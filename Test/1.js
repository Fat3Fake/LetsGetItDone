function removeChar(str) {
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
	return b === true ? `true` : `false`;
}

function lovefunc(flower1, flower2) {
	return (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
		(flower1 % 2 !== 0 && flower2 % 2 === 0)
		? true
		: false;
}

function betterThanAverage(classPoints, yourPoints) {
    let avarage = 0 
	for (let i = 0; i < classPoints.length; i++) {
        avarage += classPoints[i]
    }
    return avarage / classPoints.length <= yourPoints ? true : false;
}

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] > 0 ? sum += arr[i] : i;
    }
    return sum
}

function countBy(x, n) {
	let result = [];

    for (let i = 1; i <= n; i++) {
			result.push(x * i);
		}

    return result
}
console.log(countBy(2, 3))

