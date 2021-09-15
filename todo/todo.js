const add = document.querySelector('.input-add');
const input = document.querySelector('.input-field');
const output = document.querySelector('.todo__container--output');



const getInputValue = () => {
    console.log(input.value);
    return input.value
}
const deleteItem = () => {
    console.log('test')
}

const produceOutputValue = () => {
    var outputItem = document.createElement('div')
    outputItem.className= 'output-item';
    var para = document.createElement('P');
    para.className = 'item-desc';
    para.innerText= getInputValue();
    var ex = document.createElement('button');
    ex.className='item-x';
    ex.innerText = 'x'
    outputItem.appendChild(para);
    outputItem.appendChild(ex);
    output.appendChild(outputItem);
    console.log(output);  
    input.value = '';
    deleteItem();
}



add.addEventListener('click', produceOutputValue);


