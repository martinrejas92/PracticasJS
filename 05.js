//********FUNCIONES */
//una funcion es una operacion que devuelvo un resultado

// function bienvenido(){
//  console.log('hola mundo')
// }
//  bienvenido();

//*partes de una funcion
//*parametros: argumento de una funcion

function cuadradoNumero(num){
    var resultado = num * num;
    return resultado
}
var numero = 3;
var valor = cuadradoNumero(numero);
console.log(valor)
console.log(cuadradoNumero(5))


//*funcion que convierte de grados fahrenheit a celsius
//32f = 0c, 68f = 20c
//c = (f - 32) * 5/9

function convertirFAHaCelsius(gradoFah){
    let celsius = (gradoFah - 32) * 5 / 9;
    return celsius;
}
 let tempUno = convertirFAHaCelsius(32);
 let tempDos = convertirFAHaCelsius(68);

 console.log(tempUno)
 console.log(tempDos)


 //*funcion calcular edad ejemplo!

 function calcularEdad(yearNacimiento) {
     return 2021 - yearNacimiento;
   }
 let edad = calcularEdad(1990);

 console.log(edad)