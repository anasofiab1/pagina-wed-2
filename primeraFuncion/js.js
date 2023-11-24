var numero1;
var numero2;

function CompararEdad(num1,num2){

    if (num1 < num2){
        document.write("La primera edad es mayor que la segunda")
    }
    else if (num1 > num2){
        document.write("La segunda edad es mayor que la primera")
    }
    else if(num1 == num2){
        document.write("las edades son iguales")
    }else{
        alert("No es un numero")
    }
}

while(confirm("desea ingresar mas edades?")){
    numero1 = prompt("Primera Edad")
    numero2 = prompt("Segunda Edad")
    CompararEdad(numero1,numero2)
}