const pokemonID = +window.location.href.split('?id=')[1];

const URL_endpoint = 'https://pokeapi.co/api/v2/';
const URL_pokemon = URL_endpoint + 'pokemon/' + pokemonID;

fetch(URL_pokemon)
    .then(data => data.json())
    .then(resultado => {
        crearCarta(resultado)
    })

function crearCarta(pokemonDatos) {
    const contenedor = document.getElementById('contenedorPrincipal');

    const header = document.createElement('heaeder');
    contenedor.appendChild(header);

    const h1 = document.createElement('h1');
    h1.innerText = "Detalle de " + pokemonDatos.name.charAt(0).toUpperCase() + pokemonDatos.name.slice(1);
    header.appendChild(h1);

    const main = document.createElement('main');
    main.setAttribute('id', 'cajaDetalle');
    contenedor.appendChild(main);

    const divCarta = document.createElement('div');
    divCarta.classList.add('carta');
    main.appendChild(divCarta);

    const divH2 = document.createElement('div')
    divCarta.appendChild(divH2);

    const h2 = document.createElement('h2');
    h2.innerText = pokemonDatos.name.charAt(0).toUpperCase() + pokemonDatos.name.slice(1);
    divH2.appendChild(h2);

    const imagen = document.createElement('img');
    imagen.src = pokemonDatos.sprites.other.dream_world.front_default;
    imagen.atl = pokemonDatos.name;
    divCarta.appendChild(imagen);

    const contenedorHabilidades = document.createElement('div');
    contenedorHabilidades.classList.add('habilidades');
    divCarta.appendChild(contenedorHabilidades);

    /* const divHabilidad1 = document.createElement('div');
    divHabilidades.appendChild(divHabilidad1);

    const pHabilidad1 = document.createElement('p');
    pHabilidad1.innerText = "habilidad 1"
    divHabilidad1.appendChild(pHabilidad1);

    const divHabilidad2 = document.createElement('div');
    divHabilidades.appendChild(divHabilidad2);

    const pHabilidad2 = document.createElement('p');
    pHabilidad2.innerText = "habilidad 2"
    divHabilidad2.appendChild(pHabilidad2);

    const divHabilidad3 = document.createElement('div');
    divHabilidades.appendChild(divHabilidad3);

    const pHabilidad3 = document.createElement('p');
    pHabilidad3.innerText = "habilidad 3"
    divHabilidad3.appendChild(pHabilidad3) */

    const habilidades = pokemonDatos.abilities.slice(0, 3);

    habilidades.forEach((ability, index) => {
        const divHabilidades = document.createElement("div");

        const pHabilidades = document.createElement("p");

        pHabilidades.innerText = `Habilidad ${index + 1}: ${ability.ability.name}`;
        divHabilidades.appendChild(pHabilidades);
        contenedorHabilidades.appendChild(divHabilidades);
    });
}