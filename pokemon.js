
 fetch('https://pokeapi.co/api/v2/pokemon/gengar')
 .then(res => res.json())
 .then(response=>console.log(response))

//to get a description, we need to append the resource_uri to the end of our fetch url
