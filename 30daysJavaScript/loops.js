//for loop
for (let i = 0; i <= 5; i++) {
	console.log(i);
}

// 0 1 2 3 4 5

//while loop
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5

//do while loop 
let a = 0
do {
  console.log(a)
  a++
} while (a <= 5)

// 0 1 2 3 4 5

//for of loop
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

//break - uset to interrupt the loop
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}
//The above code stops if 3 found in the iteration process.
// 0 1 2


//continue uses to skip a certain iteration
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

// 0 1 2 4 5




