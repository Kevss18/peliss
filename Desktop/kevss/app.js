fetch('https://pokeapi.co/api/v2/pokemon')
.then(Response => Response.json())
.then(json => {
    console.log(json.results);
});