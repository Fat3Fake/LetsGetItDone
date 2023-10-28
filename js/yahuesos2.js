let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function indexof(arr, elementOfArray) {
	for (const index in arr) {
		const element = arr[index];
		if (element === elementOfArray) {
            return index
		}
        
	}
    return -1
}

console.log(indexof(arr, 11));    //проверяет искомые элемент массива, если находит, то возвращает
                                 //его индекс, если не находит, то возвращает -1
