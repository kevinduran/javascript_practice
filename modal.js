let modalBtn = document.querySelector('.modalBtn');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');




modalBtn.addEventListener('click', ()=>{
    modal.classList.add('active');
});

close.addEventListener('click', ()=>{
    modal.classList.remove('active');
});
