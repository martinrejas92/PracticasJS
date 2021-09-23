//** ejercicio codifiacion numero 3 
//calcular cuantos anos le falta a una persona para que se jubile 
//una persona se jubila a los 65 anos de edad
//enviar como datos a la funcion su ano de nacimiento y su nombre

//* primer solucion que hice
// function calcularEdad(yearNacimiento) {
//     return 2021 - yearNacimiento;
//   }
// let edad = calcularEdad(1990);

// function calcularJubilacion(edad){
//     let jubilacion = 65;
//     let anosParaJub = jubilacion - edad;

//     return anosParaJub
// }


// console.log('te falta para jubilarte ' + calcularJubilacion(edad) +  ' anos')

//*solucion de profesor 

function calcularJubilacion(yearNacimiento, nombre){
    let edad =  calcularEdad(yearNacimiento);
    let yearJubilacion = 65 - edad;
    console.log(nombre + ' le faltan ' + yearJubilacion + ' anos para su jubilacion')
}

function calcularEdad(yearNacimiento) {
    return 2021 - yearNacimiento;
  }
let edad = calcularEdad(1990);


calcularJubilacion(1992, 'Martin')
calcularJubilacion(1989, 'Sebas')