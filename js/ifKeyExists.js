const object = { a: 1, b: 2 };
function keyExists(object, key) {
	return object.hasOwnProperty(key);
}
console.log(keyExists(object, "boba"));