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
                        var desc_array=[];

                        flavor_text_array.forEach(element=>{
                            //check to see if language is english
                            if(element.language.name == 'en' && desc_array.length == 0){   
                                //now you have all english desc...
                                desc_array.push(element.flavor_text)
                            }
                        });  
                        var random_desc =getRandomInt(desc_array.length - 1)

                        pokemonDesc.innerHTML = `
                            <p class="pokemon--desc--text">${desc_array[random_desc]}</p>
                        `        
                        console.log(response)   
                    })
                pokemonImage.innerHTML= `
                    <img class="pokemon--sprite" src="${response.sprites.front_default}" />
                    <h1 class="pokemon--sprite--name">${response.forms[0].name.split('-')[0]}</h1>
                    `
                    //ERROR - h1 name sometimes returns a '-lorem'. erase it 
            })            
    })
})

