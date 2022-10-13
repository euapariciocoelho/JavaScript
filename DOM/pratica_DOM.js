/*var mensagem = document.querySelectorAll('[data-anime]');
var mensagem2 = document.querySelector('.oculto-1')
document.addEventListener("keydown", function(event){
    console.log(event)

    mensagem.forEach((um_item_data_anime) =>{
        if(event.key === 'Enter'){
            //mensagem.classList.remove('oculto')
            um_item_data_anime.classList.add('animate')
    
        }else if(event.key === 'Escape'){
            um_item_data_anime.classList.remove('animate')
        }
    })
    
}) */

var botao = document.querySelector('#btn')
var msg = document.querySelector('#teste')

botao.addEventListener("click", ()=>{

    if(botao.innerText === "Clique aqui"){
        botao.innerText = "Ocultar mensagem"
        msg.classList.remove('mensagem-oculta')
        msg.classList.add('mostrar-mensagem')
    }else{
        botao.innerText = "Clique aqui"
        msg.classList.remove('mostrar-mensagem')
        msg.classList.add('mensagem-oculta')
    }
        
        
    
    
})