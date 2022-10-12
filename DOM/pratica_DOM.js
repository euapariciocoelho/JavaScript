var mensagem = document.querySelector('.oculto');
document.addEventListener("keydown", function(event){
    console.log(event)
    if(event.key === 'Enter'){
        mensagem.classList.remove('oculto')
        mensagem.classList.add('mostrar')
    }else if(event.key === 'Escape'){
        mensagem.classList.remove('mostrar')
        mensagem.classList.add('oculto')
    }
})