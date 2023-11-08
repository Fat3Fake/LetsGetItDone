
function fetchPokemonList() {
	const apiUrl = "https://pokeapi.co/api/v2/pokemon";

	// Использует метод fetch для выполнения GET-запроса к API
	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			// Обработка полученных данных и отображение списка покемонов
			const pokemonList = data.results;
			const pokemonListContainer = document.getElementById("pokemon-list");

			pokemonList.forEach((pokemon) => {
				const listItem = document.createElement("li");
				listItem.id = "pokemons";
				listItem.textContent = pokemon.name;
				pokemonListContainer.appendChild(listItem);
			});
		});
}


fetchPokemonList();
