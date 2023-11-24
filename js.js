'use strict'

//tipos de variables

const constante = 10;                       //variable constante - variable entera
var cadenadetexto = "nombre"                //VARIABLE GLOBAL - cadena de caracteres o string
let numero = 9.5                            //variable de tipo local - variable real o double o float
var caracter = 'c'                          //variable de tipo caracter

/*
operadores matematicos
    +(suma)  -(resta)  /(divicion)  *(multiplicacion)  =(igual)  %(modulo)

operadores logico
    <(menor que)    >(mayor que)    <=(menor o igual)   >=(mayor o igual)   ==(comparacion) !=(diferente)
*/

//MENSAJES EN PANTALLA O CONSOLA

let valorString = prompt("ingresa algo")                //mostrar una alerta y recibir un valor en cadena de texto o String
let valorEntero = parseInt(prompt("ingresa algo"))      //parsea el valor para convertirlo a entero
let valor = parseFloat(prompt("ingrese algo"))         //para poner un valor flotante 
document.write("esto escribe texto en el HTML o index.html")
document.write(cadenadetexto)                           //SE LE PUEDE MANDAR UNA O VARIAS VARIABLES DE TIPO TEXTO
console.log("hola mundo")                               //mensaje en consola
confirm()                                               //mandan una alerta y retorna un boleano
alert()                                                 //manda una alerta pero no retorna nada



//CONDICIONALES

if( constante < numero)                                 //if = si - si se cumple esto (...) haga esto {...}
    alert("eso es todo")                                // si solo es una linea de codigo no es necesario "{}"
else if(numero > constante){                            //else = sino - sino se cumple si se cumple esto (...)
    alert("melo") 
}
else{                                                   //si no se cumple ninguno, haga esto
    alert("paila")
}

switch (caracter) {                                     //es una estructura condicional mas estructurada
    case 'a':                                           //case = caso - en el caso de que se cumpla haga esto
        alert('a')
        break;                                          //break = romper - el break rompe el switch

    case 'b':
        alert('b')
        break;

    case 'c':
        alert('c')
        break;

    case 'd':
        alert('d')
    break;

    default:
        break;
}




//BUCLES O CICLOS

// ciclo "PARA" en este ciclo se declaran, comparan e icrementa los parametros a comparar 
for(let i = 0 ; i <= 10 ; i++){
    alert("muestra el contenido las veces que se repita el ciclo = " + i)
}

// ciclo "MIENTRAS" en este ciclo se comprar operaciones logicas para retornar valores true o false
while(i <= 10 ){
    alert("mientras sea verdadero el mientras el ciclo se cumplira")
}

//ciclo "HACER MIENTRAS" este ciclo se recorre una vez y despues verifica si se cumple el mientras
do{         

}while(i <= 10 )




//ARRAYS O ARREGLO DE DATOS

// vector es un arreglo de datos, almacena datos en una linea horizontal
var arregloNumero = [3,6,9,12,15,18,21,24,27,30,"multiplos de 3", 'c', true]
    arregloNumero(0) = 4
    arregloNumero(12) = false

// matrix es un arreglo de datos, bidimencional y empieza en coordenadas [0][0]
var arregloMatriz = [3][4]
    arregloMatriz(0)(0) = 2
    arregloMatriz(0)(1) = 3
