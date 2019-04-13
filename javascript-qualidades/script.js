var elogios = [
    "Diva sem defeitos",
    "Máquina de vencer",
    "Ícone incompreendido",
    "Maravilindo",
    "Fada sensata",
    "Cristal",
    "Maravigold",
    "Zero defeitos",
    "Um neném",
    "Um pão",
    "Bombonzinho",
    "Joia rara"

];

function elogiar() {
    var random = Math.floor(Math.random() * elogios.length); 
    document.getElementById("titulo").innerHTML = elogios[random];
}