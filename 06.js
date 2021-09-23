//*funcion con expresiones 


 var prueba = function(nombre){ //guardar una funcion dentro de una variable 
    return 'Hola ' + nombre;
}

console.log(prueba('Martin'))


//* argumentos por default

var sumar = function(a = 5, b = 3, c = 3 ){
    return a + b + c;
}
console.log(sumar())


//*plantillas de cadena(tamplate string)
var nombre = 'Martin';
console.log(`el nombre es: ${nombre}`)

var a = 5;
var b = 10;

console.log(`la suma es : ${a + b}`)

