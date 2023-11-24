Rifa = (resultado) => {
    var intentos = (Math.floor(Math.random() * 6) + 1);
    intentos == 6 ? resultado("dia de suerte") : resultado ("mal dia");
}

Rifa((r) => console.log(r))  