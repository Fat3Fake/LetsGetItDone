let list = document.getElementById(`list`);
let input = document.getElementById(`input`);

function add(item) {
	if (item.length >= 5) {
		let li = document.createElement(`li`);
		li.className = `glyphicon glyphicon-remove`;
		li.innerText = item;
		li.style.cursor = `pointer`
		li.style.color = item;
		li.addEventListener(`click`, () => li.parentNode.removeChild(li));
		list.appendChild(li);
		input.value = ``;
		if (list.children.length > 10) {
			li.parentNode.removeChild(li);
		}
	}else {window.alert(`TEXT MUST BE 5 AND MORE SYMBOLS YOU FUCKING DUMMASS`);}
}
function remove() {
	const lastElement = list.children[list.children.length - 1].remove();
}

input.addEventListener(`keydown`, (e) => e.key === `Enter` && submit(event));

function submit(event) {
	add(event.target.value);
}
