const URL_endpoint = 'https://pokeapi.co/api/v2/';
const URL_pokemones = URL_endpoint + 'pokemon?limit=100&offset=0';

fetch(URL_pokemones)
    .then(response => response.json())
    .then(pokemonData => {
        pokemonData.results.forEach(pokemon => {
            const pokemonURL = pokemon.url;

            fetch(pokemonURL)
                .then(response => response.json())
                .then(pokemonDatos =>{
                    crearCard(pokemonDatos);
                })
        });
    })

/* function crearCard(pokemon){
    const contenedor = document.getElementById("contenedorPrincipal");
    
    const card = document.createElement('div');
    card.classList.add('card');

    const div = document.createElement('div');
    card.appendChild(div);

    const h2 = document.createElement('h2');
} */