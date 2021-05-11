let pokemonImage = document.querySelector('.pokemon--image');
let pokemonDesc = document.querySelector('.pokemon--desc');
let pokedexStart = document.querySelector('.pokedex--start');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


pokedexStart.addEventListener('click',()=>{
    console.log(getRandomInt(76));
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
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${getRandomInt(76)}/`)
        .then(response=>response.json())
        .then(res=>
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${getRandomInt(76)}/`)
                .then(response=>response.json())
                .then(res=>
                pokemonDesc.innerHTML= `
                        <p class="pokemon--desc--text">${res.flavor_text_entries[1].flavor_text}</p>
                    `
                )      
        )        
    })
});





//to get a description, we need to append the resource_uri to the end of our fetch url
