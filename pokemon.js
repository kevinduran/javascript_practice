//set any variables you will need
let pokemonImage = document.querySelector('.pokemon--image');
let pokemonDesc = document.querySelector('.pokemon--desc');
let pokedexStart = document.querySelector('.pokedex--start');

//create function for returning a random number below a preset value
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}





//on  button click
pokedexStart.addEventListener('click',()=>{

    //we create a random number < 72  (total number of ghost pokemon) 
    var random_poke = getRandomInt(71)
   //we need to start with a list of all ghost pokemon
    //fetch every ghost-type pokemon list from this url
    fetch(`https://pokeapi.co/api/v2/type/8/`)
    //convert fetched data into readable json
    .then(res => res.json())
    //list of every pokemon in an array containing pokemon objects
    //use fetch to go deeper into the object
    .then(response=>{
        // we fetch a random pokemon using our random variable
        fetch(`${response.pokemon[random_poke].pokemon.url}`)
            .then(res => res.json())
            //now you have access to the pokemon descriptions
            //you just need to fetch them
            .then(response=>{
                //fetching into json for pokemon descriptions
                fetch(`${response.species.url}`)
                    .then(res => res.json())
                    .then(response =>{ 
                        var flavor_text_array = response.flavor_text_entries;
                        //we will loop through the array of desc. 
                        flavor_text_array.forEach(element=>{
                            //if the language is english then output to DOM
                            if(element.language.name == 'en'){
                                //now you have all english desc...
                                console.log(element.flavor_text);
                            }
                        });           
                    })
                pokemonImage.innerHTML= `
                    <img class="pokemon--sprite" src="${response.sprites.front_default}" />
                    <h1 class="pokemon--sprite--name">${response.forms[0].name}</h1>
                    `
                    //ERROR - h1 name sometimes returns a '-lorem'. erase it 
            })            
    })
})

