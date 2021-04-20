let output = document.querySelector('.output');
let myInput = document.querySelector('.myInput');
let button = document.querySelector('button');
let index = 0;

button.addEventListener('click', () => {
    setInterval(autoType, 100);
});

function autoType() {
    let auto = "hello " + myInput.value+ ',' + " how can I be of assistance?";
    output.innerText = auto.slice(0,index);
    index++;
    if(index > auto.length){
        return;
    }
   
};
 




l