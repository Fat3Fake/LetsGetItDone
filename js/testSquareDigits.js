let numbers = 9119;
function squareDigits(num) {
	let arr = Array.from(String(num), Number);
	let arrSquared = [];
	arr.forEach((element) => {
		arrSquared.push(Math.pow(element, 2));
	});
	let str = arrSquared.join(``)
	let result = Number(str);
	return result;
}
console.log(squareDigits(numbers));
