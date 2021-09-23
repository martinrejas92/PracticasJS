//* EJERCICIO 4

// IMPLEMENTAR UNA FUNCION QUE NOS PERMITA EVALUAR EL PROCENTAJE DE RESPUESTAS POSITIVAS Y NEGATIVAS DE UN EXAMEN 
// LA FUNCION DEBE RECIBIT EL NOMBRE Y LA CANTIDAD DE RESOUESTAS POSITICAS Y NEGATUVAS 


// LA FUNCION DEBE CALCULAR EL PORCENTAJE QYE REPRESENTA CADA TIPO DE RESPUESTA EN UNA BASE DE 100 PREGUNTAS 

// DE LAS RESPUESTAS POSITIVAS SE DEFUNE EL SCORE DE LA PERSONA A ( > 90%), B(70% - 89%), C(45% - 69%), D(<45%)


let calcualarScore = function(nombre, pos, neg){
    var porPositivas = (pos/100) *100;
    var porNegativos = (neg/100) * 100;
    var score = ''

    if(porPositivas > 90){
        score = 'A'
    }else if(porPositivas >= 70){
        score = 'B'
    }else if(porPositivas >= 45){
        score ='C'
    }else {
        score = 'D'
    }
    return `${nombre} tiene la nota de ${score}, Positivas: ${porPositivas}%, Negativas: ${porNegativos}%`

}

var resultado = calcualarScore('martin', 65, 35);
console.log(resultado)