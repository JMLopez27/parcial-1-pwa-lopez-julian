const URL_endpoint = 'https://pokeapi.co/api/v2/';
const URL_pokemones = URL_endpoint + 'pokemon?limit=100&offset=0';

let pokemonDatos = [];

fetch(URL_pokemones)
    .then(response => response.json())
    .then(pokemonData => {
        pokemonData.results.forEach(pokemon => {
            const pokemonURL = pokemon.url;

            fetch(pokemonURL)
                .then(response => response.json())
                .then(pokemonData => {
                    pokemonDatos.push(pokemonData);
                    crearCard(pokemonData);
                })
        });
    })

function crearCard(pokemonData) {
    const contenedor = document.getElementById("contenidoPrincipal");

    const card = document.createElement('div');
    card.classList.add('card');

    const divH2 = document.createElement('div');
    divH2.classList.add('divCentrado')
    card.appendChild(divH2);

    const h2 = document.createElement('h2');
    h2.innerText = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
    divH2.appendChild(h2);

    const img = document.createElement('img');
    img.src = pokemonData.sprites.other.dream_world.front_default;
    img.alt = pokemonData.name;
    divH2.appendChild(img);

    const p = document.createElement('p');
    p.innerText = pokemonData.types.map(tipos => tipos.type.name.toUpperCase());
    divH2.appendChild(p);

    const divBoton = document.createElement('div');
    divBoton.classList.add('cardBoton');
    card.appendChild(divBoton);

    const boton = document.createElement('button');
    boton.innerText = 'Detalle';
    boton.addEventListener('click', () => {
        mostrarDetalle(pokemonData.id);
    })
    divBoton.appendChild(boton);

    contenedor.appendChild(card);
}

function mostrarDetalle(pokemonId) {
    window.location.href = `http://127.0.0.1:5500/detalle.html?id=${pokemonId}`;
}
const buscador = document.getElementById("buscador")
buscador.addEventListener("input", buscarPokemon);

function buscarPokemon() {
    const valorBuscador = buscador.value.toLowerCase();

    const filtroPokemon = pokemonDatos.filter(pokemon =>
        pokemon.name.toLowerCase().includes(valorBuscador)
    );

    const contenedor = document.getElementById("contenidoPrincipal");
    contenedor.innerHTML = "";

    filtroPokemon.forEach(pokemon => {
        crearCard(pokemon);
    });
}