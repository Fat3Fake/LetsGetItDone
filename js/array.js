let arr = [5, 1, 4];
arr.push(3);
//добавляет элемент в массив(в конце если шо)
arr.pop()
//убирает последний єлемент с массива
arr.unshift("пися")
//добавляет новый элемент в начало массива
arr.shift()
//удаляет первый элемент массива
let a = arr.map((item,i)=>{
    return item + "хуй"
})

arr.forEach((item,i)=>{
    return item + "хуй";
})

let summ = arr.reduce((sum, curr)=>sum+curr,0)

arr.indexOf(2);

arr.find((item) => item === 2);

arr.filter((item)=>item>2) // фильтрует массив по условию (item>2)

arr.slice(0, 3) //режет массив нахуй, возвращает новый (начало, конец)

arr.splice(1, 2); //режет массив нахуй, возвр новый(начальный элемент, количество элементов на возврат)

arr.sort((a, b)=>a-b) //сортирует массив (a-b: от меньшего к большему)(b-a: от большего к меньшему), если без параметров, то в алфавитном

arr.reverse() //реверс нахуй шо

let arr2 = [2, 4, 5]
arr.concat(arr2)   //обьединяет массивы

console.log(arr.concat(arr2));
