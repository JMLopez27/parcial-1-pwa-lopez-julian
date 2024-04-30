const URL_endpoint = 'https://pokeapi.co/api/v2/';
const URL_pokemones = URL_endpoint + 'pokemon?limit=100&offset=0';

fetch(URL_pokemones)
    .then(data => data.json())
    .then(resultado => {
        console.log(resultado.results[0].url);
    })

/* function crearCard(pokemon){
    const contenedor = document.getElementById("contenedorPrincipal");
    
    const card = document.createElement('div');
    card.classList.add('card');

    const div = document.createElement('div');
    card.appendChild(div);

    const h2 = document.createElement('h2');
} */