function fetchPokemonList() {
	const apiUrl = "https://pokeapi.co/api/v2/pokemon";

	
	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.results)
		});
}
fetchPokemonList();