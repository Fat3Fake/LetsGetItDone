let list = document.getElementById(`list`);
let input = document.getElementById(`input`);
let storage = window.localStorage.getItem(`key`);
if (!storage) {
	window.localStorage.setItem(`key`, JSON.stringify([]));
	storage = [];
} else {
	storage = JSON.parse(storage);
	render();
}

function render() {
	if (storage.length === 0) {
		let li = document.createElement(`li`);
		li.innerText = `storage is empty`
		list.appendChild(li);
		return 
	}
	list.innerHTML = ``
	storage.forEach((item, index) => {
		let li = document.createElement(`li`);
		li.innerText = item;
		li.style.cursor = `pointer`;
		li.style.color = item;
		li.addEventListener(`click`, () => remove(index));
		list.appendChild(li);
	});
}


function add(item) {
	storage.push(item)
	toStorage();
	render();
}
function remove(index) {
	storage.splice(index, 1)
	toStorage()
	render()
}

input.addEventListener(`keydown`, (e) => e.key === `Enter` && submit(event));

function submit(event) {
	add(event.target.value);
}

function toStorage() {
	window.localStorage.setItem(`key`, JSON.stringify(storage));
}












































//let arr = [`test`, `pisyu`, `pinus`];
//window.localStorage.setItem(`key`, JSON.stringify(arr))
//let aboba = window.localStorage.getItem(`key`);
//console.log(JSON.parse(aboba))
