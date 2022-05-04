fetch('https://pokeapi.co/api/v2/pokemon')
.then(Response => Response.json())
.then(json => {
    console.log(json.results);
});

function printPokemons(pokemons){
    pokemons.forEach(pokemon => {
        console.log(pokemon.name);
        console.log(pokemon.url);
    });
}