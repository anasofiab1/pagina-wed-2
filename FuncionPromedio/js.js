var num = 1;
var suma = 0;
var contador = 0;

function promedio(){
    
    do{
        num = parseInt(prompt("ingrese un numero"))
        if(num > 0){
            contador++
            suma = suma + num
        }  
    }while(num > 0)
    alert("promedio es igual a " + suma/contador)
}

promedio()
 