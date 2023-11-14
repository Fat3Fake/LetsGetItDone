let arr = [`red`, `pink`, `blue`]
function editor(index) {
	arr[index] = `pop`;
	return arr
}
console.log(editor(1))