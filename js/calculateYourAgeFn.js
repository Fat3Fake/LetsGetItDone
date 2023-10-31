function yorAgeIs(dob) { //date of birth
	let date = dob.split(".");
	return new Date().getFullYear() - date[2];
}
console.log(yorAgeIs("19.05.1994"));
