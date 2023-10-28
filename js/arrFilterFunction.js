let arr = [1, 2, 3, 4, 5];

function filter(arr, checkCondition) {
	let arrFiltered = [];
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		if (checkCondition(element)) {
			arrFiltered.push(element);
		}
	}
    arrFiltered.sort((a, b) => b - a);
    return arrFiltered;
}

function condition(element) {
	return element > 2;
}

console.log(filter(arr, condition));
