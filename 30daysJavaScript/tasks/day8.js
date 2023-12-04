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

//level 3

const usersDB = [
	{
		_id: "ab12ex",
		username: "Alex",
		email: "alex@alex.com",
		password: "123123",
		createdAt: "08/01/2020 9:00 AM",
		isLoggedIn: false,
	},
	{
		_id: "fg12cy",
		username: "Asab",
		email: "asab@asab.com",
		password: "123456",
		createdAt: "08/01/2020 9:30 AM",
		isLoggedIn: true,
	},
	{
		_id: "zwf8md",
		username: "Brook",
		email: "brook@brook.com",
		password: "123111",
		createdAt: "08/01/2020 9:45 AM",
		isLoggedIn: true,
	},
	{
		_id: "eefamr",
		username: "Martha",
		email: "martha@martha.com",
		password: "123222",
		createdAt: "08/01/2020 9:50 AM",
		isLoggedIn: false,
	},
	{
		_id: "ghderc",
		username: "Thomas",
		email: "thomas@thomas.com",
		password: "123333",
		createdAt: "08/01/2020 10:00 AM",
		isLoggedIn: false,
	},
];

const products = [
	{
		_id: "eedfcf",
		name: "mobile phone",
		description: "Huawei Honor",
		price: 200,
		ratings: [
			{ userId: "fg12cy", rate: 5 },
			{ userId: "zwf8md", rate: 4.5 },
		],
		likes: [],
	},
	{
		_id: "aegfal",
		name: "Laptop",
		description: "MacPro: System Darwin",
		price: 2500,
		ratings: [],
		likes: ["fg12cy"],
	},
	{
		_id: "hedfcg",
		name: "TV",
		description: "Smart TV:Procaster",
		price: 400,
		ratings: [{ userId: "fg12cy", rate: 5 }],
		likes: ["fg12cy"],
	},
];

let userID = function () {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let userId = "";

	for (let i = 0; i < 6; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length - 1);
		userId += characters.charAt(randomIndex);
	}

	return userId;
}

const now = new Date();
const options = {
	day: "2-digit",
	month: "2-digit",
	year: "numeric",
	hour: "numeric",
	minute: "numeric",
	hour12: false,
};
const formattedDate = new Intl.DateTimeFormat("en-US", options).format(now);

function signUp(id, username, email, password, createdAt, isLoggedIn) {
	for (const element of usersDB) {
		if (element.email === email) {
			return `This email is allready registered`
		}
		if (element.username === username) {
			return `This username is allready registered`
		}
	}
	let newUser = {};
	newUser._id = id;
	newUser.username = username;
	newUser.email = email;
	newUser.password = password;
	newUser.createdAt = createdAt;
	newUser.isLoggedIn = isLoggedIn;
	usersDB.push(newUser)

	return
}
console.log(
	signUp(userID(), `Alex`, `chento2014@gmail.com`, `123123`, formattedDate, true)
);

function rateProduct(productID, userID, rate) {
	for (const product of products) {
		if (product._id === productID) {
			let usersRate = {}
			usersRate.userId = userID;
			usersRate.rate = rate;
			product.ratings.push(usersRate)
		}
	}
}
console.log(rateProduct("aegfa", userID(), 4));

function avarageRating(ID) {
	let length = 0
	let sum = 0
	for (const product of products) {
		if (product._id === ID) {
			length += product.ratings.length;
			for (const rating of product.ratings) {
				sum += rating.rate;
			}
		}
	}
	return `The avarage rating of product is ${sum/length}`
}
console.log(avarageRating(`eedfcf`));

function likeProduct(prodID, user) {
	for (const product of products) {
		if (product._id === prodID) {
			for (let i = 0; i < product.likes.length; i++) {
				if (product.likes[i] === user) {
					return product.likes.splice(i, 1)
				}else{
					return product.likes.push(user)
				}
			}
		}
	}
	
}
console.log(likeProduct(`hedfcg`, `fg22cy`));
