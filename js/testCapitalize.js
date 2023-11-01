var str = "How can mirrors be real if our eyes aren't real";
function JadenCase(string) {
	let arr = string.split(" ");
	let arrUpper = arr.map((word) => {
		if (word.length === 0) {
			return ``;
		}
		return word[0].toUpperCase() + word.slice(1).toLowerCase();
	});
    let result = arrUpper.join(` `)

	return result;
}
console.log(JadenCase(str));
