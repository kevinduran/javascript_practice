let button__prev = document.querySelector('.button__prev');
let button__next = document.querySelector('.button__next');
let counter = 0;

button__prev.addEventListener('click', () => {
    counter--;
    if(counter < 0){
        counter = 2;
    }
    console.log(counter);
})
button__next.addEventListener('click', () => {
    counter++;
    if(counter > 2){
        counter = 0;
    }
    console.log(counter);
 
})


