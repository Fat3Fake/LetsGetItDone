for (let i = 0; i <= 10; i++) {
	console.log(i);
}

for (let i = 10; i >= 0; i--) {
	console.log(i);
}

let sharp = `#`
while (sharp.length <= 7) {
    console.log(sharp)
    sharp += `#`
}

for (let i = 0; i <= 10; i++) {
	console.log(`${i} * ${i} = ${i * i}`);
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`)
    
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        continue
    }
    console.log(i)
}

let sum = 0
for (let i = 0; i <= 100; i++) {
	sum += i
	if (i >= 100){
        console.log(`The sum of all numbers from 0 to 100 is ${sum}`)
    }
}

let sumEven = 0
let sumOds = 0
for (let i = 0; i <= 100; i++) {
	if (i % 2 === 0) {
        sumEven += i
    }else {
        sumOds += i
    }
    if (i >= 100) {
        console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds is ${sumOds}`)
    }
}

let arr = []

for (let i = 0; i <= 5; i++) {
    arr.push(Math.random())
    if (i >= 5) {
        console.log(arr)
    } 
}

const countries = [
	"Albania",
	"Bolivia",
	"Canada",
	"Denmark",
	"Ethiopia",
	"Finland",
	"Germany",
	"Hungary",
	"Ireland",
	"Japan",
	"Kenya",
];
let res = []
for (let i = 0; i < countries.length; i++) {
    res.push(countries[i].toUpperCase()) 
}
console.log(res)

let result = []
for (let i = 0; i < countries.length; i++) {
    result.push([countries[i], countries[i].slice(0,3).toUpperCase(), countries[i].length])
    
}
console.log(result)

let land = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes(`land`)) {
        land.push(countries[i])
    }
}
if (land.length === 0) {
    console.log(`All these countries are without land`)
}else {
    console.log(land);
}

const countryWithMostCharacters = countries.reduce((currentMax, country) => {
	return country.length > currentMax.length ? country : currentMax;
}, "");
console.log(countryWithMostCharacters);

