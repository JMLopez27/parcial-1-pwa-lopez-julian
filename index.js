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

function crearCard(pokemonDatos){
    const contenedor = document.getElementById("contenidoPrincipal");
    
    const card = document.createElement('div');
    card.classList.add('card');

    const divH2 = document.createElement('div');
    divH2.classList.add('divCentrado')
    card.appendChild(divH2);

    const h2 = document.createElement('h2');
    h2.innerText = pokemonDatos.name;
    divH2.appendChild(h2);

    const img = document.createElement('img');
    img.setAttribute('src', pokemonDatos.sprites.other.dream_world.front_default);
    divH2.appendChild(img);

    const p = document.createElement('p');
    p.innerText = pokemonDatos.types.map(tipos => tipos.type.name);
    divH2.appendChild(p);

    const divBoton = document.createElement('div');
    divBoton.classList.add('cardBoton');
    card.appendChild(divBoton);

    const boton = document.createElement('button');
    boton.innerText = 'Detalle';
    divBoton.appendChild(boton);

    contenedor.appendChild(card);
}