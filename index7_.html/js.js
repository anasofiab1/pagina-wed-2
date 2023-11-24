var nom1
var edad = (prompt("ingrese su edad"))
var continuar = true
var lista = "<h1>Lista</h1><ul>"

while(continuar){
    nom1 = prompt("ingrese su nombre")
    edad = prompt("ingrese su edad")
    continuar = confirm("Desea continuar?")
    lista = lista + "<li>"+ nom1 + " ; " + edad+"</li>"

}

lista = lista + "</ul>"
document.getElementById("Div").innerHTML = lista