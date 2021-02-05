let toast  = document.querySelector('.toast');

toast.addEventListener('click', () => {
    let toast_note = document.createElement('div');
    toast_note.classList.add("toast_note")
    toast_note.innerText = "congratulations";
    document.querySelector('.container').appendChild(toast_note);   
    setTimeout(function(){
        document.querySelector('.container').removeChild(toast_note)
    },1000)
})
