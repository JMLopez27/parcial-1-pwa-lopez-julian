const pokemonID = +window.location.href.split('?id=')[1];

const URL_endpoint = 'https://pokeapi.co/api/v2/';
const URL_pokemon = URL_endpoint + 'pokemon/' + pokemonID;

fetch(URL_pokemon)
    .then(data => data.json())
    .then(resultado => {
        crearCartaDetalle(resultado)
    })

function crearCartaDetalle(pokemonDatos) {
    const contenedor = document.getElementById('contenedorPrincipal');

    const header = document.createElement('heaeder');
    header.classList.add('tituloDetalle')
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

    const tipos = pokemonDatos.types.map(tipo => tipo.type.name);

    let backgrounds = tipos.map(type => fondosXtipos[type]);
    backgrounds = backgrounds.filter(bg => bg !== undefined);
  
    if (backgrounds.length > 0) {
      divCarta.style.background = backgrounds.join(', ');
    };

    const divH2 = document.createElement('div')
    divH2.classList.add('tituloCarta');
    divCarta.appendChild(divH2);

    const h2 = document.createElement('h2');
    h2.innerText = pokemonDatos.name.charAt(0).toUpperCase() + pokemonDatos.name.slice(1);
    divH2.appendChild(h2);

    const pTipos = document.createElement('p');
    pTipos.innerText = pokemonDatos.types.map(tipos => tipos.type.name.toUpperCase().replace("", " "));
    divH2.appendChild(pTipos);

    const imagen = document.createElement('img');
    imagen.src = pokemonDatos.sprites.other.dream_world.front_default;
    imagen.atl = pokemonDatos.name;
    divCarta.appendChild(imagen);

    const contenedorHabilidades = document.createElement('div');
    contenedorHabilidades.classList.add('habilidades');
    divCarta.appendChild(contenedorHabilidades);

    const habilidades = pokemonDatos.abilities.slice(0, 3);

    habilidades.forEach((ability, index) => {
        const divHabilidades = document.createElement("div");

        const pHabilidades = document.createElement("p");

        pHabilidades.innerText = `Habilidad ${index + 1}: ${ability.ability.name.toUpperCase()}`;
        divHabilidades.appendChild(pHabilidades);
        contenedorHabilidades.appendChild(divHabilidades);
    });

    const divDetalle = document.createElement('div');
    divDetalle.classList.add('detalle');
    main.appendChild(divDetalle);

    if (backgrounds.length > 0){
        divDetalle.style.background = backgrounds.join(', ');
    };
    
    const h3Datos = document.createElement('h3');
    h3Datos.innerText = `Estadisticas ${pokemonDatos.name.charAt(0).toUpperCase() + pokemonDatos.name.slice(1)}`;
    divDetalle.appendChild(h3Datos);

    const divEstadisticas = document.createElement('div');
    divEstadisticas.classList.add('estadisticas');
    divDetalle.appendChild(divEstadisticas);

    const divPesoAltura = document.createElement('div');
    divPesoAltura.classList.add('pesoAltura')
    divEstadisticas.appendChild(divPesoAltura);

    const peso = document.createElement('p');
    peso.innerText = `Peso: ${pokemonDatos.weight}kg`;
    divPesoAltura.appendChild(peso);

    const altura = document.createElement('p');
    altura.innerText = `Altura: ${pokemonDatos.height}cm`;
    divPesoAltura.appendChild(altura);

    const divStatsBase = document.createElement('div');
    divStatsBase.classList.add('statsBase')
    divEstadisticas.appendChild(divStatsBase);

    pokemonDatos.stats.forEach(stat => {
        const pStats = document.createElement('p');
        pStats.innerText = `${stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: ${stat.base_stat}`;
        divStatsBase.appendChild(pStats);
    })
}

const fondosXtipos = {
    "fire-flying": "linear-gradient(to bottom right, rgb(255, 60, 0), rgba(151,167,241,255))",
    "grass-poison": "linear-gradient(to bottom right, rgba(140,198,94,255), rgba(141,70,146,255))",
    "bug-poison": "linear-gradient(to bottom right, rgba(169,184,57,255), rgba(141,70,146,255))",
    "bug": "linear-gradient(to bottom right, rgba(169,184,57,255), rgba(93,156,46,255))",
    "fire": "linear-gradient(to bottom right, red, orange)",
    "water": "linear-gradient(to bottom right, rgba(57,142,226,255), rgba(145,200,245,255))",
    "normal-flying": "linear-gradient(to bottom right, rgba(195,193,186,255), rgba(151,167,241,255))",
    "bug-flying": "linear-gradient(to bottom right, rgba(169,184,57,255), rgba(151,167,241,255))",
    "normal": "linear-gradient(to bottom right, rgba(195,193,186,255), gray)",
    "poison": "linear-gradient(to bottom right, rgba(141,70,146,255), violet)",
    "electric": "linear-gradient(to bottom right, rgba(249,181,39,255), orange)",
    "water-ice": "linear-gradient(to bottom right, rgba(57,142,226,255), rgba(115,212,243,255))",
    "poison-flying": "linear-gradient(to bottom right, rgba(141,70,146,255), rgba(151,167,241,255))",
    "bug-glass": "linear-gradient(to bottom right, rgba(169,184,57,255), rgba(140,198,94,255))",
    "ground": "linear-gradient(to bottom right, rgba(203,176,94,255), rgb(134, 71, 71))",
    "poison-ground": "linear-gradient(to bottom right, rgba(141,70,146,255), rgba(203,176,94,255))",
    "water-fighting": "linear-gradient(to bottom right, rgba(57,142,226,255), brown)",
    "fairy": "linear-gradient(to bottom right, rgba(237,193,237,255), violet)",
    "psychic": "linear-gradient(to bottom right, rgba(229,74,127,255), rgb(212, 5, 74))",
    "fighting": "linear-gradient(to bottom right, rgb(226, 9, 9), rgba(120,53,33,255))",
    "normal-fairy": "linear-gradient(to bottom right, rgba(195,193,186,255), rgba(237,193,237,255))",
    "water-poison": "linear-gradient(to bottom right, rgba(57,142,226,255), rgba(141,70,146,255))",
    "rock-ground": "linear-gradient(to bottom right, rgba(133,113,68,255), rgba(203,176,94,255))",
    "electric-steel": "linear-gradient(to bottom right, rgba(249,181,39,255), rgba(197,198,210,255))",
    "water-psychic": "linear-gradient(to bottom right, rgba(57,142,226,255), rgba(229,74,127,255))",
    "ghost-poison": "linear-gradient(to bottom right, rgba(80,63,48,255), rgba(141,70,146,255))",
};

/* function almacenarPokemon(nombrePokemon){
    let pokemonesVistos = JSON.parse(localStorage.getItem('pokemonesVistos')) || [];

    if(!pokemonesVistos.includes(nombrePokemon)){
        pokemonesVistos.push(nombrePokemon);
    };

    localStorage.setItem('pokemonesVistos', JSON.stringify(pokemonesVistos));
} */