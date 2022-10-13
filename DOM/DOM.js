/* const element = document.querySelector('input')

console.log(element.value) // pegar valor do input */

/* const div = document.querySelector('.demo')
div.setAttribute('id', 'colocando_id');

const novo_atributo = document.querySelector('#colocando_id')
console.log(novo_atributo) */

// novo_atributo.getAttribute('id') -> vai pegar o atributo ou seja o nome do id
// div.removeAttribute('id') ou class
// div.setAttribute('class', 'um dois')
// elemento.classList.add('nome_da_classe_que_vai_adicionar', 'posso por mais uma classe apenas separando por virgula')
// elemento.classList.remove()

// const el = document.querySelector('body')
// console.log(el.children) 

// criando elementos
/* const div = document.createElement('div')
div.innerHTML = 'ola devs'

const body = document.querySelector('body')
body.append(div) // coloca depois do primeiro filho -> prepend coloca antes do primeiro filho

const script = document.querySelector('script')
body.insertBefore(div, script) // vai adicionar antes do script (elemento que vai ser adicionado, antes de...) */

document.addEventListener('keydown', function(event){ //pega teclas que foram digitadas em qualquer parte da tela
    console.log(event)

    const eventKey = event.key === 'Escape'
})

