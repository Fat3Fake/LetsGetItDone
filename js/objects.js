const object = { a: 1, b: 2 };
function plusFive(object) {
	let keysof = Object.keys(object);
	for (const key of keysof) {
		object[key] = object[key] + 5;
	}
	console.log(object);
}
plusFive(object);
