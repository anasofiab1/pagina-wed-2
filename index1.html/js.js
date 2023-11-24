function traerDatos(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => {
            console.log(data)
            imagen();})
        .catch(data => console.log("no cargo"))
        .finally(data => console.log(""))
}

function imagen(){
    var km = document.createElement("img")
    km.src="http://www.gifde.com/js_pics_aux/descarga.php?descarga=si&c=gif/otros/decoracion/cargando-loading/&f=cargando-loading-041.gif"
    document.append(km)
}
const hola = document.getElementById("jh")
hola.addEventListener ("click", ()=>{traerDatos()} )
