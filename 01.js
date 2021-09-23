// OPERADORES




var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;


let resultado1 = pesoLuis/(alturaLuis*alturaLuis)
let resultado2 = pesoCarlos/(alturaCarlos*alturaCarlos)
console.log(resultado1)
console.log(resultado2)

// function masGordo(){
//     if(resultado1 < resultado2){
//         console.log('Carlo tiene un IMC mayor que Luis')
//     }else{
//         console.log('Luis tiene un IMC mayor que Carlos')
//     }

// }

// masGordo()


let comparacion = resultado1 < resultado2;
console.log('el Imc de carlos, es superior al de luis??  -' + comparacion)