const now = new Date(); //new time object

//date methods

console.log(now.getFullYear()); // 2020
console.log(now.getMonth()); // 0, because the month is January,  month(0-11)
console.log(now.getDate()); // 4, because the day of the month is 4th,  day(1-31)
console.log(now.getDay()); // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)
console.log(now.getHours()); // 0, because the time is 00:56:41
console.log(now.getMinutes()); // 56, because the time is 00:56:41
console.log(now.getSeconds()); // 41, because the time is 00:56:41
console.log(now.getTime()); // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

//formating values to a human readeble time format


const options = {
	day: "2-digit",
	month: "2-digit",
	year: "numeric",
	hour: "numeric",
	minute: "numeric",
	hour12: false,
};
const formattedDate = new Intl.DateTimeFormat("en-US", options).format(now);
console.log(formattedDate);