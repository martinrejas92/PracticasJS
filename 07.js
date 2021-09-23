//***ARRAYS */


// var nombres = ['pablo', 'carlos', 'teresa'];
// var vegetales = new Array('tomate', 'lechuga','papa');

// console.log(nombres[2])
// console.log(vegetales[1])

// nombres[1] = 'martin';
// console.log(nombres[1])
// vegetales[2] = 'zanahoria';
// console.log(vegetales[2])

// console.log(nombres.length)


// //* OPERACIONES CON ARRAYS*************

//  let frutas = ['manzana', 'naranja', 'banana', 'pera'];

//  for(i=0; i <= frutas.length - 1; i++){
//      console.log(frutas[i])
//  }


// frutas.forEach(function(elemento, indice, array){
//     console.log(elemento, indice)
// })


// frutas.push('naranja'); //agregar elemento al final 
// console.log(frutas)
// frutas.unshift('frutillas')//agregar elemento al pricipio
// console.log(frutas)
// frutas.pop()//elimina ultimo elemnto del array
// console.log(frutas)
// frutas.shift()//elimina primer elemento del array
// console.log(frutas)

// let pos = frutas.indexOf('banana'); //me dice el indice donde se pocisiona el elemento
// console.log(pos)

// frutas.splice(1,1); // elimina un elemento primer argumento es el indice del array, segundo indice la cantidad de elementos que se elimanan desde ese indice
// console.log(frutas);



//**ARRAY CON ELEMENTOS DE DIFERENTES TIPOS */

// var persona = ['martin', 'rejas', 29,'9999999', 1.60]
// console.log(persona)

//*OBJETOS LITERALES  
//con objetos de forma literal de abre {corchetes} y no llaves como arrays normales 

// let persona = {
//     nombre: 'Martin',
//     apellido: 'Rejas',
//     hobbies: ['videojuegos', 'peliculas', 'ingles'],
//     trabajo: 'developer',
//     estatus: true
// };
// console.log(persona.nombre)
// console.log(persona['hobbies'])

// persona.estatus = false

// console.log(persona.estatus)


//*OBJETOS CON LA SINTAXIS OBJECT********************

// forma de crear objetos pero con la sintaxis object 
let persona2 = new Object();
persona2.nombre = 'sebas';
persona2.apellido ='Sebastiani';
persona2['trabajo'] = 'analista';

console.log(persona2)



//* OBJETOS Y METODOS
//los metodos son funciones, que son funciones dentro de un objeto

let persona = {
    nombre: 'Martin',
    apellido: 'Rejas',
    hobbies: ['videojuegos', 'peliculas', 'ingles'],
    trabajo: 'developer',
    estatus: true,
    yearNamiento: 1992,
    //Metodos
    calcularEdad: function(){
        this.edad = 2021 - this.yearNamiento;
    }
};
persona.calcularEdad()
console.log(persona)
