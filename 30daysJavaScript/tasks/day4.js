function isEven(number) {
    return number%2 === 0 ? `${number} is an even number`: `${number} is an odd number.`
}
console.log(isEven(5))


let grade = -1;

const result =
	grade >= 80
		? "A"
		: grade >= 70
		? "B"
		: grade >= 60
		? "C"
		: grade >= 50
		? "D"
		: grade >= 0
		? "F"
		: "ti vapshe daun";

console.log(`your score is ${result}`);

let day = null

let days = {
    saturday: `saturday is a weekend`,
}
function checkDay(day) {
    if (!day) {
        return `vvedi day daun`
    }
    let res = days[day.toLowerCase()]
    
    return res ? res : `ti sho daun?`
}
console.log(checkDay(day))