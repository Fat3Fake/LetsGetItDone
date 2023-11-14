let list = document.getElementById(`list`);
let storage = window.localStorage.getItem(`key`);
let searchInput = document.getElementById(`search`)
let select = document.getElementById(`prior`)
if (!storage) {
	window.localStorage.setItem(`key`, JSON.stringify([]));
	storage = [];
} else {
	storage = JSON.parse(storage);
	render();
}

function render() {
	list.innerHTML = ``;
	const url = new URL(window.location.href);
	let order = url.searchParams.get(`order`)
	if (order) {
		order === `dsc`
			? storage.sort((a, b) => b.priority - a.priority)
			: storage.sort((a, b) => a.priority - b.priority);
	}
	console.log(url.searchParams.get(`order`));
	storage.forEach((item, index) => {
		let li = document.createElement(`li`);
		let edit = document.createElement(`SPAN`);
		let del = document.createElement(`SPAN`);
		del.className = `delBtn`;
		edit.className = `editBtn`;
		del.innerText = `delete`;
		edit.innerText = `edit`;
		li.innerText = `${item.title} - ${item.priority} - ${item.date}`;
		li.id = `li`;
		del.style.cursor = `pointer`;
		li.style.color = item;
		edit.addEventListener(`click`, () => editinput(index));
		del.addEventListener(`click`, () => remove(index));
		list.appendChild(li);
		li.appendChild(del);
		li.appendChild(edit);
	});
}

function editinput(index) {
	let editedText = prompt("Please enter edited to do:", "");
	if (!editedText) {
		remove(index);
	} else {
		storage[index].title = editedText;
		storage[index].date = new Date(Date.now()).toISOString();
		toStorage();
		render();
	}
}

function add(item) {
	if (item.length === 0) {
		return;
	}
	storage.push(item);
	toStorage();
	render();
}

function remove(index) {
	storage.splice(index, 1);
	toStorage();
	render();
	showEmptyStorage();
}

function submit() {
	window.location = `/todolist/mocha.html`
	let input = document.getElementById("myInput");
	add(input.value);
	input.value = ``
}

function toStorage() {
	window.localStorage.setItem(`key`, JSON.stringify(storage));
}

function showEmptyStorage() {
	if (storage.length === 0) {
		let li = document.createElement(`span`);
		li.innerText = `storage is empty`;
		li.id = `empty`;
		list.appendChild(li);
		return;
	}
}

list.addEventListener(
	"click",
	function (ev) {
		if (ev.target.tagName === "LI") {
			ev.target.classList.toggle("checked");
		}
	},
	false
);
showEmptyStorage();

searchInput.addEventListener(`change`, (event) => search(event))
function search(event) {
	let word = event.target.value;
	if (word.length === 0) {
		storage = JSON.parse(window.localStorage.getItem(`key`));
		render()
		return
	}
	storage = storage.filter((item) => item.title.includes(word));
	render();
}

select.addEventListener(`change`, (event) => selectHandler(event.target.value))

function selectHandler(value) {
	window.location.href = `/todolist/index.html?order=${value}`;
	
}