let kanyeOutput = document.querySelector('.output');

let kanyeButton = document.querySelector('button');

kanyeButton.addEventListener('click', ()=>{
    let kanyeInput= document.querySelector('input').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${kanyeInput}`)
    .then(kanyeResult=>kanyeResult.json())
    .then(kanyeRes=>{
        console.log('pokemon : ' + kanyeRes.forms[0].name)
        console.log('move : ' + kanyeRes.moves[0].move.name)
        kanyeOutput.innerHTML = `<img src=${kanyeRes.sprites.other.dream_world.front_default} />`
    })

})



// fetch('https://pokeapi.co/api/v2/pokemon')
// .then(res => res.json())
// .then(response=>console.log(response))

//this gets every pokemon they have.
//BTW to get a description, we need to append the resource_uri to the end of our fetch url

//what we want:
    //-a pokedex that only displays ghost pokemon (a spookadex)