var contraseña = "linoPuta";
var introContra = prompt("Introduzca la contraseña: ");
var contador = 3;
while (contraseña != introContra) {

    introContra = prompt("Contraseña incorrecta le quedan "+contador+" intentos");
    contador--;
 
    if (contador == 0) {
        alert("eres marica homo");
        window.location.href = "index.html";
        break;
    }
}