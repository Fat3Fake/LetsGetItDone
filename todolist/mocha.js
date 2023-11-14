let description = document.getElementById(`description`);
let title = document.getElementById(`title`);
let priority = document.getElementById(`priority`);
const value = document.querySelector("#value");
value.textContent = priority.value;
priority.addEventListener("input", (event) => {
	value.textContent = event.target.value;
});

function add() {
    let v1 = description.value
    let v2 = title.value
    let v3 = priority.value
    if (!v1 || !v2) {
        alert(`TI DAUN`)
        return
    }
    let storage = getStorage(`key`)
    let date = new Date(Date.now()).toISOString();
    let object = {
			description: v1,
			title: v2,
			priority: v3,
			date,
			id: storage.length + 1
		};
    
    storage.push(object)
    toStorage(storage)
    window.location = `/todolist/index.html`
}
function getStorage(key) {
    return JSON.parse(window.localStorage.getItem(key));
}
function toStorage(storage) {
	window.localStorage.setItem(`key`, JSON.stringify(storage));
}