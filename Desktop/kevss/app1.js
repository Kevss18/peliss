fetch('https://pokeapi.co/api/v2/pokemon')
.then(Response => Response.json())
.then(json => {
    printPokemons(json.results);
});

function printPokemons(pokemons){
    console.log(pokemons);
}
