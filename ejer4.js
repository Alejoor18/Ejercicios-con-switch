let numero = parseInt(prompt("Ingrese un número:"));

switch (numero % 2) {
    case 0:
        alert("El número es par.");
        break;
    default:
        alert("El número es impar.");
        break;
}
