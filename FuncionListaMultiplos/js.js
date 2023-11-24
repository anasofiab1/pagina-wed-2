var numero = parseInt(prompt("ingrese un numero"))
var multiplo = 1
var cadena = "<h1>Lista multiplos</h1><ul>"

for(multiplo ; multiplo <= 10 ; multiplo++){
    cadena = cadena + "<li>" + (numero * multiplo) + "</li>"
}

cadena = cadena + "</ul><h1>eso es todo crack, ya tienes tus multiplos</h1>"
document.write(cadena)