let inputs = document.querySelectorAll(`input`);
let result = document.getElementById(`result`);

console.log(inputs);
inputs.forEach((element) => {
	element.addEventListener(`click`, (event) =>
		manageDisplay(event.target.value)
	); //tut vsegda event ebaca v sraku
});

function manageDisplay(value) {
    if (value === `=`) {
        result.value = eval(result.value)
        return
    }
	if (value === `c`) {
		result.value = ``;
	} else {
        let isNumber = +result.value.at(-1)
        if (isNumber || !result.value.length || +value || +value === 0) {
            result.value += value;
        }
	}
    
}
