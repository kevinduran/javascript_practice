let button__prev = document.querySelector('.button__prev');
let button__next = document.querySelector('.button__next');
let image = document.querySelector('.photo__container--photo')
let counter = 0;

 button__prev.addEventListener('click', () => {
    getPrev();
})
button__next.addEventListener('click', () => {
    getNext();
})

let imageArray= [
    'horror2.jpeg',
    'horror3.jpeg',
    'horror4.jpeg'
]


function getPrev() {
    counter--;
    if(counter < 0){
        counter = 2;
    }
    image.src=`assets/${imageArray[counter]}`;
}

function getNext() {
    counter++;
    if(counter > 2){
        counter = 0;
    }
    image.src=`assets/${imageArray[counter]}`;
}