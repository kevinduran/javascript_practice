const add = document.querySelector('.input-add');
const input = document.querySelector('.input-field');
const output = document.querySelector('.todo__container--output');



const getInputValue = () => {
    console.log('getInputValue: '+ input.value);
    return input.value
}


const createItem = () => {

    var outputItem = document.createElement('div')
    var outputItemDesc = document.createElement('p');
    var outputItemDelete = document.createElement('button');

    outputItem.className= 'output-item';
    outputItemDesc.className = 'item-desc';
    outputItemDelete.className='item-x';

    outputItemDesc.innerText= getInputValue();
    outputItemDelete.innerText = 'x'

    outputItem.appendChild(outputItemDesc);
    outputItem.appendChild(outputItemDelete);
    output.appendChild(outputItem);

    outputItemDelete.addEventListener('click', ()=>outputItem.remove())
}

const produceOutputValue = () => {
    createItem() ; 
    input.value = '';
}

add.addEventListener('click', produceOutputValue);


