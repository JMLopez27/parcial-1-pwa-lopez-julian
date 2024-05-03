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
    peso.innerText = `Peso: ${pokemonDatos.weight}`;
    divPesoAltura.appendChild(peso);

    const altura = document.createElement('p');
    altura.innerText = `Altura: ${pokemonDatos.height}`;
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