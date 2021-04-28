let modalBtn = document.querySelector('.modalBtn');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');
let api_key = 'e1e6bd2072ba2201d3f480a464b90e40';



modalBtn.addEventListener('click', ()=>{
    modal.classList.add('active');
    getMovie();
});

close.addEventListener('click', ()=>{
    modal.classList.remove('active');
});

function getMovie(){
    let randomMovie = Math.floor(Math.random() * 20 );
    let randomPage = Math.floor(Math.random()* 100);
    console.log('random number : ' + randomMovie)
    console.log('random page : ' + randomPage)
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27&page=${randomPage}&language=en-US`)
        .then(res => res.json())
        .then(data => console.log(data.results[randomMovie].original_title))
}



//todo:
    //need to solve random page number query issue
    //NEED TO FIND OUT HOW TO ACCESS PAGE NUMBER IN REQUEST
    //need to display to dom
    //need to display image as well