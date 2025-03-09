let angulo1 = parseInt(prompt("Ingrese el primer ángulo:"));
let angulo2 = parseInt(prompt("Ingrese el segundo ángulo:"));
let angulo3 = parseInt(prompt("Ingrese el tercer ángulo:"));

switch (angulo1 + angulo2 + angulo3) {
    case 180:
        alert("El triángulo es válido.");
        break;
    default:
        alert("El triángulo no es válido.");
        break;
}