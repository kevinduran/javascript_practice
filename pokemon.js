let pokemonImage = document.querySelector('.pokemon--image');
let pokemonDesc = document.querySelector('.pokemon--desc');
let pokedexStart = document.querySelector('.pokedex--start');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


pokedexStart.addEventListener('click',()=>{
    getRandomInt(76);
    fetch(`https://pokeapi.co/api/v2/type/8/`)
    .then(res => res.json())
    .then(response=>{
        fetch(`${response.pokemon[getRandomInt(76)].pokemon.url}`)
            .then(res => res.json())
            .then(response=>{
                 pokemonImage.innerHTML= `
                    <img class="pokemon--sprite" src="${response.sprites.front_default}" />
                    <h1 class="pokemon--sprite--name">${response.forms[0].name}</h1>
                    `
        })
        
    })
});





//to get a description, we need to append the resource_uri to the end of our fetch url
