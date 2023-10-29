const object = { a: 3, b: 4, c: 5 };
const object2 = {};

function isSumGreaterThanTen(object) {
	let sum = 0;
	for (let key in object) {
		sum += object[key];
	}

	return sum > 10;
}

console.log(isSumGreaterThanTen(object));


