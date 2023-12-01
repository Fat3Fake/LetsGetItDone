//Getting values from an object
//We can access values of object using two methods:

// 1 -- using . followed by key name if the key-name is a one word
// 2 -- using square bracket and a quote

const person = {
	firstName: "Asabeneh",
	lastName: "Yetayeh",
	age: 250,
	country: "Finland",
	city: "Helsinki",
	skills: [
		"HTML",
		"CSS",
		"JavaScript",
		"React",
		"Node",
		"MongoDB",
		"Python",
		"D3.js",
	],
	getFullName: function () {                      //function inside of object called object method
		return `${this.firstName}${this.lastName}`; //this key word refers to the object itself
	},
	"phone number": "+3584545454545",
};

// accessing values using .
console.log(person.firstName);
console.log(person.lastName);
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])



