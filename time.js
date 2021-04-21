let time  = document.querySelector('.time_button');
let averageLifespan = 28470; //78 years is average human life expectancy
let age = document.querySelector('input');
let output = document.querySelector('.output');
let days = document.querySelector('.days')


time.addEventListener('click', () => {
   deathClock();
});

function deathClock() {
    var result = (averageLifespan - (age.value*365)).toString();
    days.innerText = result;
    output.style.opacity = '1';
}


age.addEventListener('click', () => {
  age.value = '';
  output.style.opacity = '0';
})

