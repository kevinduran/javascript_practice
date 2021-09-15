const add = document.querySelector('.input-add');
const input = document.querySelector('.input-field');
const output = document.querySelector('.todo__container--output');
const close_task = document.querySelector('.item-x');



const getInputValue = () => {
    console.log(input.value);
    return input.value
}

const produceOutputValue = () => {
    var para = document.createElement('P');
    para.className = 'item-desc';
    para.innerText= getInputValue();
    console.log(para);    
    
}



add.addEventListener('click', produceOutputValue);





