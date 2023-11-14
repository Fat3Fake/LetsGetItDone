//level 1

let challenge = `30 Days Of JavaScript`;
let orgs = `Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon`;
let sentence =
	"You cannot end a sentence with because because because is a conjunction";
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase());
console.log(challenge.slice(3))
console.log(challenge.includes(`Script`))
console.log(challenge.split(` `))
console.log(orgs.split(`,`))
console.log(challenge.replace(`JavaScript`, `Pyton`))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf(`a`))
console.log(challenge.lastIndexOf(`a`))
console.log(sentence.indexOf(`because`))
console.log(sentence.search(`because`))
console.log(challenge.trim())
console.log(challenge.startsWith(`3`))
console.log(challenge.endsWith(`t`))
console.log(challenge.match(/a/gi))
console.log(challenge.concat(challenge))
console.log(challenge.repeat(4))

//level 2
console.log(
	`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);
console.log(`10` == 10)
let a = 9.8
let b = 10
console.log(Math.ceil(a) == b)

let p = `python`
let j = `jargon`
console.log(p.includes(`on`), j.includes(`on`))
console.log(Math.random() * 101)
console.log(Math.random() * (100 - 50 + 1) + 50); //random number between 50 - 100
let random = Math.floor(Math.random() * 10);
let js = `JavaScript`
console.log(js.charAt(random))
console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`)

let newSentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(newSentence.substring(31, 54))

let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let res = love.match(/love/gi);
console.log(res.length)

const sentence1 =
	"%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

const cleanedText = sentence1.replace(/[^a-zA-Z ]/g, "").toLowerCase();
const words = cleanedText.split(` `);
