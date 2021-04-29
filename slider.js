let left = document.querySelector('.left');
let right = document.querySelector('.right');
let img = document.querySelectorAll('.photo');
let counter = 0;

let test = document.querySelector('.carousel_container');

left.addEventListener('click', () => {
    counter++;
    if(counter > 2){
        counter = 0;
    }
    console.log(counter);
    console.log(img[counter]);
    test.style.transition = "1s ease all";
    test.style.transform = "translateX(-360px)";
})

right.addEventListener('click', () => {
    counter++;
    if(counter > 2){
        counter = 0;
    }
    console.log(counter);
    console.log(img[counter]);
    test.style.transition = "1s ease all";
    test.style.transform = "translateX(360px)";
})
