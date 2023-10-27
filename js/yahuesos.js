let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < arr.length; index++) {
	const element = arr[index];
	if (element ** 2 > 30) {
        const shift = arr.shift()
        console.log(shift)
	} else {
		const pop = arr.pop();
		console.log(pop);
	}
}
console.log(arr)