function checkIfIncludes(string, word) {
	//проверяет, включает ли строка слово
	return string.includes(word);
}
function stringReverse(string) {
	//реверсирует строку

	return string.split("").reverse().join(""); //.split("") - разбивает строку на массив(""-по символу) // .join("") делает строку из массива
}

function capitalize(string) {
	return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
function counter(string) {
	//считает количество уникальных символов в стринге
	const object = {};
	for (const key of string) {
		if (key === " ") {
			continue;
		}
		if (object.hasOwnProperty(key)) {
			object[key] += 1;
		} else {
			object[key] = 1;
		}
	}
	return object;
}

const arr = [1, 2, 3, 4, 5];
function middle(array) {
	let index = Math.floor(array.length / 2);
	return array[index];
}

