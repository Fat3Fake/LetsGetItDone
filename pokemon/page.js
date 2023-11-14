const url = new URL(window.location.href);
const id = url.searchParams.get(`id`);
const h1 = document.getElementById(`pokemonName`);
const p = document.getElementById(`pokemonWeight`);

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
	.then((response) => response.json())
	.then((data) => {
		const { name, weight } = data;
		h1.textContent = name;
		p.textContent = `Pokemon weight is ${weight}`;
	});
