let fisica = parseInt(prompt("Ingrese su calificación en Física:"));
let quimica = parseInt(prompt("Ingrese su calificación en Química:"));
let biologia = parseInt(prompt("Ingrese su calificación en Biología:"));
let matematicas = parseInt(prompt("Ingrese su calificación en Matemáticas:"));
let informatica = parseInt(prompt("Ingrese su calificación en Informática:"));

let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
let porcentajeFinal = (sumaCalificaciones / 50) * 100;

let calificacion;
switch (true) {
    case (porcentajeFinal < 60):
        calificacion = "Mala";
        break;
    case (porcentajeFinal <= 80):
        calificacion = "Buena";
        break;
    default:
        calificacion = "Excelente";
        break;
}

alert("Tu porcentaje es " + porcentajeFinal + "% y tu calificación es " + calificacion + ".");
