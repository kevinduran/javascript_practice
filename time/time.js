let time  = document.querySelector('.time_button');
let averageLifespan = 28470; //78 years is average human life expectancy
let age = document.querySelector('input');
let output = document.querySelector('.output');
let days = document.querySelector('.days');
let wisdom = document.querySelector('.wisdom');


time.addEventListener('click', () => {
   deathClock();
});

age.addEventListener('click', () => {
    age.value = '';
    output.style.opacity = '0'
    wisdom.style.opacity = '0'
  });

function deathClock() {
    var result = (averageLifespan - (age.value*365)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");//the replace was from stack overflow to add a comma
    days.innerText = result;
    output.style.opacity = '1';
    wisdom.style.opacity = '1'

}

