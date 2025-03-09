let opcion = parseInt(prompt("Ingrese la opción de suscripción:\n1. 15 días - $18,000\n2. 30 días - $35,000\n3. 3 meses - $86,000"));

let valor;

switch (opcion) {
    case 1:
        valor = 18000;
        break;
    case 2:
        valor = 35000;
        break;
    case 3:
        valor = 86000;
        break;
    default:
        valor = 0;
        alert("Opción no válida.");
}

alert("El valor de su suscripción es: $" + valor);
