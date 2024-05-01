const pokemonID = +window.location.href.split('id?=')[1];

const URL_endpoint = 'https://pokeapi.co/api/v2/';
const URL_pokemon = URL_endpoint + 'pokemon/' + pokemonID;