let modalBtn = document.querySelector('.modalBtn');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');
let api_key = 'e1e6bd2072ba2201d3f480a464b90e40';
let outputTop = document.querySelector('.outputTop');
let outputBottom = document.querySelector('.outputBottom');


modalBtn.addEventListener('click', ()=>{
    modal.classList.remove('hide')
    modal.classList.add('active');
    getMovie();
});

close.addEventListener('click', ()=>{
    modal.classList.remove('active');
    outputTop.innerHTML = `<h2 class="outputTitle"></h2><p class="outputDesc"></p>`;
    outputBottom.innerHTML= '';
            

});

function getMovie(){
    let randomMovie = Math.floor(Math.random() * 20 );
    let randomPage = Math.floor(Math.random()* 100);
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27&page=${randomPage}&language=en-US`)
        .then(res => res.json())
        .then(data =>{
            outputTop.innerHTML = `<h2 class="outputTitle">${data.results[randomMovie].original_title}</h2><p class="outputDesc">${data.results[randomMovie].overview}</p>`;
            outputBottom.innerHTML= `<img class="myImage" src="https://image.tmdb.org/t/p/original/${data.results[randomMovie].poster_path}">`
            
        })
}

