//*ejercucio sentencias

//*********
// ***tienes 2 alumnos, pablo y maria
// *pablo tiene las siguientes notas en el curso de js 14, 8,16
// *pablo tiene las siguientes notas en el mismo curso: 12, 18, 10
// *calcular el primedio de cada alumnos, ademas indicar quien tiene el primedio superior, e indicar si el alumno esta aprobado
// *, para ello su promedio debe ser superior a 13

// let promedioPablo;
// let promedioMaria;

// let notasPablo = [14, 8, 16]
// let notasMaria = [12, 18, 10]

// promedioPablo = (notasPablo[0]+notasPablo[1]+notasPablo[2])/notasPablo.length;
// console.log(promedioPablo)
// promedioMaria = (notasMaria[0]+notasMaria[1]+notasMaria[2])/notasMaria.length;
// console.log(promedioMaria)

// if(promedioMaria > promedioPablo){
//     console.log('maria tiene un promedio mayor al de pablo')
// }else{
//     console.log('pablo tiene un promedio mayor a maria')
// }
 

// if(promedioMaria >= 13){
//     console.log('Maria esta aprobada')
// }else{
//     console.log('Maria esta desaprobada')
// }

// if(promedioPablo >= 13){
//     console.log('Pablo esta aprobado')
// }else{
//     console.log('Pablo esta desaprobado')
// }

//*****resultado del profesor */

let promedioPablo = (14 + 8 + 16)/3
let promedioMaria = (12+ 18 +10)/3

if(promedioPablo > promedioMaria){
    console.log('pablo tiene el promedio superior')
}else if(promedioMaria > promedioPablo){
    console.log('maria tiene un promedio superior')
}else{
    console.log('pablo y maria tienen promedios iguales')
}


for(let i=1; i<=2; i++){
    if(i === 1){
        if(promedioPablo >= 13){
            console.log('pablo esta aprobado' + promedioPablo)
        }else{
            console.log('pablo esta desaprobado ' + promedioPablo)
        }
    }else{
        if(promedioMaria >= 13){
            console.log('maria esta aprobada ' + promedioMaria)
        }else{
            console.log('maria esta desaprobada ' + promedioMaria)
        }
    }
}
