
var premio = 7; //número premiado
var suerte = prompt("Introduce un numero entre el 1 y el 10 "); //pedimos el número del aficionado
if (suerte == premio) {
alert("¡Enhorabuena, ha ganado la camiseta oficial firmada por todos los jugadores!"); //si acierta salta el mensaje
}
else {
alert("Lo siento, siga probando.");// en caso de fallo sale este mensaje
}