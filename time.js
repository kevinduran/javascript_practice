let time  = document.querySelector('.time_button');
let averageLifespan = 28470; //78 years is average human life expectancy
let age = document.querySelector('input');
let output = document.querySelector('.output');

time.addEventListener('click', () => {
   deathClock();
});

function deathClock() {
    var result = (averageLifespan - (age.value*365)).toString();
    output.innerHTML ='<div class="death">you have less than </div> <div class="death">' + result + '</div> <div class="death"> days left alive</div>';
}




