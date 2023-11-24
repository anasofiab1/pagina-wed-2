var num1 = parseInt(prompt("ingrese el primer numero"))
var num2 = parseInt(prompt("ingrese el segundo numero"))
var cadena = "<h1>Lista numeros</h1><ul>"

for(num1 ; num1 <= num2 ; num1++){
    cadena = cadena + "<li>" + num1 + "</li>"
}

cadena = cadena + "</ul>"
document.write(cadena)