async function fetchPokemonList() {
	const apiUrl = "https://pokeapi.co/api/v2/pokemon";

	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			const pokemonList = data.results;
			const pokemonListContainer = document.getElementById("pokemon-list");

			pokemonList.forEach((pokemon, index) => {
				const listItem = document.createElement("li");
				listItem.id = "pokemons";
				listItem.textContent =
					pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
				listItem.style.cursor = `pointer`;
				listItem.addEventListener(`click`, () => toPage(index + 1));
				pokemonListContainer.appendChild(listItem);
			});
		});
	
	const data = await fetch(apiUrl) //alternative
	const json = await data.json()
	
}

fetchPokemonList();

function toPage(id) {
	window.location.href = `/pokemon/page.html?id=${id}`;
}
