let array = [2, 4, 5];
for (let index = 0; index < array.length; index++) {
	//цикл через индекс
	const element = array[index];
}

for (const iterator of array) {
	//цил напрямую
}

for (const index in array) {
	//проходит по элементам мaссива и берёт индекс
	const element = array[index];
}

let step = 0;
while (step < 3) {
	console.log(step);
	++step;
}

let step1 = 0;
do {
	console.log(step1);
	++step1;
} while (step1 < 0);
