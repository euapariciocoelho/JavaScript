let array = [1,2,3,4,5,6,7];

let div_map = document.querySelector('.demo-map')


/* map mantem o tamanho original do array, sendo realizado uma operação em cada um dos itens*/

let pares = array.map((item_do_array) => {
    return item_do_array * 2;
});

div_map.innerHTML = 'Array:' + array + '<br>' + 'Numeros pares no array: ' + pares;

/* No filter pode ter um array do mesmo tamanho do original ou um sem nada*/

let notas = [5.5, 6.7, 7.8, 4.6];

let div_filter = document.querySelector('.demo-filter');


let maior_que_seis = notas.filter((item_do_array) =>{
    return item_do_array > 6;
});

div_filter.innerHTML = '<br>' + 'Array: ' + notas + '<br>' + 'Notas maiores que seis:' + maior_que_seis 

/* (acumulador, elemento) */

let numeros = [1,2,3];

let div_reduce = document.querySelector('.demo-reduce');


let soma = numeros.reduce((acumulador, elemento) =>{
    return acumulador + elemento;
});

div_reduce.innerHTML = '<br>' + 'Array: ' + numeros + '<br>' + 'Soma dos elementos: ' + soma;



