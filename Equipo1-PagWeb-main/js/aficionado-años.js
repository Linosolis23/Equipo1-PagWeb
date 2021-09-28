var nombre = prompt("Introduzca su nombre como aficionado "); //pedimos el nombre del aficionado
var años =prompt("Introduzca los años que lleva como aficionado");//años que lleva el aficionado
var equipo= "Equipo1"; //Nombre del equipo
var respuesta;



while ( isNaN(años) ) {
    años=prompt("Solo numeros");
}
if((años < 2)){
    respuesta = "Basico";
}
else if ((años > 2) && (años < 5) ) {
    respuesta="Avanzado"
    
}else{
    respuesta="Premium"
}


document.write("Hola <b>"+nombre + "</b> bienvenido a la web del equipo <b>" + equipo +"</b>.Gracias por acompañarnos durante estos <b>"+años+"</b> años. Tu nivel de categoria es "+respuesta );//mensaje una vez introduzcas los datos