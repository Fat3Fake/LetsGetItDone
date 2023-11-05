let list = document.getElementById(`list`);
let input = document.getElementById(`input`);

function add(item) {
	if (item.length > 5) {
		let li = document.createElement(`li`);
		let btn = document.createElement(`BUTTON`);
		btn.id = `button`;
		btn.onclick = li.remove();
		li.innerText = item;
		li.style.color = item;
		li.style.cursor = `pointer`;
		li.addEventListener(`click`, () => li.parentNode.removeChild(li));
		list.appendChild(li);
		input.value = ``;
		if (list.children.length > 10) {
			li.parentNode.removeChild(li);
		}
	}
}
function remove() {
	const lastElement = list.children[list.children.length - 1].remove();
}

input.addEventListener(`keydown`, (e) => e.key === `Enter` && submit(event));

function submit(event) {
	add(event.target.value);
}
