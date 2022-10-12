/* Todo objeto possui propriedades e funcionalidades
estado e comportamento
atributos e metodos 

objetos são criado a partir de uma classe

Encapsulamento: colocar em uma capsula, agrupar funções e variaveis
esconder detalhes de implementação, camada de segurança para atributos e metodos

"uso os objetos mas por baixo dos panos acontecem muito mais coisas"*/

/* atributos -> informação, metodo -> ações
new é uma nova instancia da classe 
let pessoa = {
    nome: 'aparicio',
    idade: 25,
    feliz: true,
    games: ['resident evil 5', 'Fortnite'],
    carros: {
        camaro: {
            placa: '123456',
            cor: 'cinza'
        }
    },
    andar: function (km){ //pode ser apenas andar(){...}
        alert(pessoa.nome + ' andou ' + km)
    }
}

pessoa.games.push('Guitar Hero 2')

// console.log(pessoa.games)

console.log(pessoa.carros.camaro.cor)
pessoa.andar(20) */


/*function Celular(marca, tamTela, bateria){
    this.marca = marca,
    this.tamTela = tamTela,
    this.bateria = bateria,
    this.ligar = function(){
        console.log("Fazendo ligação...")
    }
}

const cel = new Celular('asus', 5.5, 5000)


class Poligono{
    get area(){
        return this.#calcularArea()
    }   

    #calcularArea(){ // com # não irá mostrar, mostrara apenas o que faz sentido;
        return this.altura * this.largura
    }
}


Polimorfismo:

class Lutador extends Atleta -> lutador é uma nova class que está herdando de Atleta
    constructor(peso){
        super(peso) // herdando
    }*/



