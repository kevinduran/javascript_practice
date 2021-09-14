let output = document.querySelector('.output');
let myInput = document.querySelector('.myInput');
let button = document.querySelector('button');
let index = 0;


button.addEventListener('click', () => {
    var test = setInterval(function(){
            var auto = "hello " + myInput.value ;
            output.innerText = auto.slice(0,index);
            index++;
            if(index > auto.length){ 
                clearInterval(test);
            }
    }, 100);
});
myInput.addEventListener('click',function(){
   if(output.innerText !== ''){
        myInput.value = '';
        output.innerText = '';
        index = 0;
   }
})

