function plus(a, b) {
	//plus//
	return a + b;
}

let resultplus = plus(4, 3);

console.log(resultplus);

function minus(a, b) {
	//minus//
	return a - b;
}

let resultminus = minus(4, 3);

console.log(resultminus);

function times(a, b) {
	//times//
	return a * b;
}

let resulttimes = times(3, 4);

console.log(resulttimes);

function divided(a, b) {
	if (b === 0) {
		return "Division by zero is huynya";
	} //divided//
	return a / b;
}

let resultdivided = divided(10, 2);

console.log(resultdivided);
