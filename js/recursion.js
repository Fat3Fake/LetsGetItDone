function recursion(n = 0) {
	let counter = n;
	console.log(counter);
	if (counter === 10) {
		return console.log("done");
	}

	return recursion(counter + 1);
}
console.log(recursion());

