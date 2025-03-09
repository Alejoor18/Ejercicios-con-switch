let copias = parseInt(prompt("Ingrese la cantidad de copias a imprimir:"));
let precioPorCopia;

switch (true) {
    case (copias >= 1000):
        precioPorCopia = 50;
        break;
    case (copias >= 750):
        precioPorCopia = 80;
        break;
    case (copias >= 500):
        precioPorCopia = 100;
        break;
    default:
        precioPorCopia = 120;
        break;
}

let precioTotal = copias * precioPorCopia;

alert("Precio por copia: $" + precioPorCopia + " Y su Precio total: $" + precioTotal);
