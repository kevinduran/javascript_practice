const add = document.querySelector('.input-add');
const input = document.querySelector('.input-field');
const close_task = document.querySelector('.item-x');



const getInputValue = () => {
    console.log(input.value)
    input.value = '';
}




add.addEventListener('click', getInputValue);