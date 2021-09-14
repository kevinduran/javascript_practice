let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');
let lineRotateOne = document.querySelector('.lineOne');
let lineRotateTwo = document.querySelector('.lineThree');
let lineRotateMiddle = document.querySelector('.lineTwo');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('visible');
    lineRotateOne.classList.toggle('navRotateOne')
    lineRotateTwo.classList.toggle('navRotateTwo')
    lineRotateMiddle.classList.toggle('navRotateMiddle');
})

