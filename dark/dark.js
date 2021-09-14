let dark = document.querySelector('input');
dark.addEventListener('click',function(){
    if(this.checked){
        document.querySelector('body').style.backgroundColor = "black";
        document.querySelector('h2').style.color = "rgb(17, 16, 16)"
        document.querySelector('.container').style.backgroundColor = "#ccc"
    }else{
        document.querySelector('.container').style.backgroundColor = "rgb(17, 16, 16)"
        document.querySelector('body').style.backgroundColor = "#ccc";
        document.querySelector('h2').style.color = "rgb(231, 43, 43)";
    }
})

