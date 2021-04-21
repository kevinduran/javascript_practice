let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');
let lineRotateOne = document.querySelector('.lineOne');
let lineRotateTwo = document.querySelector('.lineThree');
let lineRotateMiddle = document.querySelector('.lineTwo');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('visible');
    lineRotateOne.classList.add('navRotateOne')
    lineRotateTwo.classList.add('navRotateTwo')
    lineRotateMiddle.classList.add('navRotateMiddle');
})

