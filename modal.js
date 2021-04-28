let modalBtn = document.querySelector('.modalBtn');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');
let api_key = 'e1e6bd2072ba2201d3f480a464b90e40';
let randomMovie = Math.floor(Math.random() * 20 );
console.log(randomMovie)

modalBtn.addEventListener('click', ()=>{
    modal.classList.add('active');
});

close.addEventListener('click', ()=>{
    modal.classList.remove('active');
});

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`)
.then(res => res.json())
.then(data => console.log(data)

)


//turn fetch into function

//on click activate function

//function takes input