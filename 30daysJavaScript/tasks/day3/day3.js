//level 1

const firstName = `Ruslan`;
const lastName = `Kulazhko`;
const country = `Ukraine`;
const city = `Kriviy Rih`;
const age = 29;
const isMarried = false;

let check1 = `10`;
let check2 = 10;
console.log(typeof check1 === typeof check2);

let check3 = parseInt(`9.8`);
let check4 = 10;
console.log(check3 === check4);

let py = `python`;
let ja = `jargon`;
console.log(py.length === ja.length);

let dr = `dragon`;
console.log(!(dr.includes(`on`) && py.includes(`on`)));

let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime() / 1000)

//level 2

let firstName1 = "Asabeneh";
let lastName1 = "Yetayeh";
let lenght = firstName1.length > lastName1.length ? `longer` : `shorter`;

console.log(
	`Your first name, ${firstName1} is ${lenght} than your family name, ${lastName1}`
);

let pezdyuk = 2010;
let ded = 1994;
let year = new Date().getFullYear()
let age1 = year - ded;
let age2 = year - pezdyuk;

function isAllowed(age) {
    if (age >= 18) {
       return `You are ${age}. You are old enough to drive`
    }else{
       return `You are ${age}. You will be allowed to drive after ${18 - age} years.`
    }

}

console.log(isAllowed(age2))

const now = new Date();

const year1 = now.getFullYear() // return year
const month = 2 // return month(0 - 11)
const date1 = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

const options = {
	day: "2-digit",
	month: "2-digit",
	year: "numeric",
	hour: "numeric",
	minute: "numeric",
	hour12: false,
};
const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
console.log(formattedDate);

