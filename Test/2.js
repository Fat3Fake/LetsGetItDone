const arr = [1, 2, 3, 4, 5]
const arr1 = [...arr]

let arr2 = arr.reduce((sum, cur) => sum + cur, 0) 

function huy(){
    return arguments
}
let huy1 = (...arg) => {
    return arg
}
console.log(huy1([1, 2, 3, 4, 5]));