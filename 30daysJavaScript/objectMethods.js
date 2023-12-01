const person = {
	firstName: "Asabeneh",
	age: 250,
	country: "Finland",
	city: "Helsinki",
	skills: ["HTML", "CSS", "JS"],
	title: "teacher",
	address: {
		street: "Heitamienkatu 16",
		pobox: 2002,
		city: "Helsinki",
	},
	getPersonInfo: function () {
		return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
	},
};

const copyPerson = Object.assign({}, person); //Uses To copy an object without modifying the original object
console.log(copyPerson);

const keys = Object.keys(copyPerson); //Uses To get the keys or properties of an object as an array
console.log(keys);
//['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address);
console.log(address);
//['street', 'pobox', 'city']

const values = Object.values(copyPerson);// Uses To get values of an object as an array
console.log(values);

const entries = Object.entries(copyPerson);//Uses :To get the keys and values in an array
console.log(entries);

console.log(copyPerson.hasOwnProperty("age"));//To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty("score"));