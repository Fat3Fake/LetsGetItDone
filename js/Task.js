function repeatStr(n, s) {
	let result = ``;
    let i = n;
	while (i > 0) {
		result = result + s;
        i -= 1;
	}
	return result;
}

let arr = [-1, -2, 3, -4, -5];
function invert(array) {
	let a = array.map((item, i) => {
		return item > 0 ? item - item * 2 : Math.abs(item);
	});
    return a
}
console.log(invert(arr))
