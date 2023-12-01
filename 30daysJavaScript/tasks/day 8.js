//level 1
const dog = {
	name: `Sharik`,
	legs: `4 legs`,
	color: `brown`,
	age: 7,
	bark: function () {
		return `woof woof`;
	},
};
dog.breed = `Husky`;
dog.getDogInfo = function () {
	return `${this.name} is ${this.age} years old.`;
};
console.log(dog);
console.log(dog.getDogInfo());
console.log(dog.bark());

//level 2

const users = {
	Alex: {
		email: "alex@alex.com",
		skills: ["HTML", "CSS", "JavaScript"],
		age: 20,
		isLoggedIn: false,
		points: 30,
	},
	Asab: {
		email: "asab@asab.com",
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"Redux",
			"MongoDB",
			"Express",
			"React",
			"Node",
		],
		age: 25,
		isLoggedIn: false,
		points: 50,
	},
	Brook: {
		email: "daniel@daniel.com",
		skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
		age: 30,
		isLoggedIn: true,
		points: 50,
	},
	Daniel: {
		email: "daniel@alex.com",
		skills: ["HTML", "CSS", "JavaScript", "Python"],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	John: {
		email: "john@john.com",
		skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
		age: 20,
		isLoggedIn: true,
		points: 50,
	},
	Thomas: {
		email: "thomas@thomas.com",
		skills: ["HTML", "CSS", "JavaScript", "React"],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	Paul: {
		email: "paul@paul.com",
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"MongoDB",
			"Express",
			"React",
			"Node",
		],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
};

let personWithMostSkills = null;
let maxSkills = 0;

function whoHasManySkills() {
	for (const person in users) {
		if (users.hasOwnProperty(person)) {
			const currentSkills = users[person].skills.length;
			if (currentSkills > maxSkills) {
				maxSkills = currentSkills;
				personWithMostSkills = person;
			}
		}
	}
	return `User with the most skills is ${personWithMostSkills}`;
}
console.log(whoHasManySkills());

let userCounter = 0;

function usersCount() {
	for (const person in users) {
		if (users.hasOwnProperty(person)) {
			userCounter += 1;
		}
	}
	return `Total count of users is ${userCounter}`;
}
console.log(usersCount());

let moreThan50 = 0;

function counter50() {
	for (const person in users) {
		if (users.hasOwnProperty(person)) {
			if (users[person].points >= 50) {
				moreThan50 += 1;
			} else {
				continue;
			}
		}
	}
	return `Total count of users having 50 and more points is ${moreThan50}`;
}
console.log(counter50());

function mernStack() {
	let mernDevs = ``;
	for (const person in users) {
		if (users.hasOwnProperty(person)) {
			if (
				users[person].skills.includes(`MongoDB`, `Express`, `React`, `Node`)
			) {
				mernDevs += person + "\n";
			}
		}
	}
	return `MERN stack developers are:\n${mernDevs}`;
}
console.log(mernStack());

let usersCopy = Object.assign({}, users);
usersCopy.Ruslan = {
    email: `Chento2014@gmail.com`,
    skills: [`HTML`, `CSS`, `JavaScript`, `Huge Cock`],
    age: 29,
    isLoggedIn: true,
    points: 100
}

console.log(usersCopy);

