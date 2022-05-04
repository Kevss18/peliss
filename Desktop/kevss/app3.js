fetch("https://pokeapi.co/api/v2/pokemon")
.then(response => response.json())
.then(data => mostrarData(data.results));

function mostrarData(data) {
    const container = document.getElementById("container");
    data.forEach(element => {
        container.innerHTML = `
            ${container.innerHTML}
            <div class="card">
                <span>N°${getPokemon(element.url)}</span>
                <h2>${getPokemon(element.name)}</h2>
            </div>
        `
    });
}

function getPokemon(url){
    return url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
}