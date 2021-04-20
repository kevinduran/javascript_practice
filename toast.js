let toast  = document.querySelector('.toast_button');

toast.addEventListener('click', () => {
    let toast_note = document.createElement('div');
    toast_note.classList.add("toast_note")
    toast_note.innerText = "congratulations";
    document.querySelector('.container').appendChild(toast_note);   
    setTimeout(function(){
        document.querySelector('.container').removeChild(toast_note)
    },1000)
})
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
   
}
