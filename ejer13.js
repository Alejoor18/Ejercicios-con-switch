let operador = prompt("Ingrese su operador (Claro, Tigo o Movistar):");
let minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));

let cargoFijo = 0, valorMinuto = 0, valorDatos = 0;

switch (operador) {
    case "Tigo":
        cargoFijo = 45000;
        valorMinuto = 200;
        valorDatos = 12000;
        break;
    case "Claro":
        cargoFijo = 30000;
        valorMinuto = 100;
        valorDatos = 18000;
        break;
    case "Movistar":
        cargoFijo = 40000;
        valorMinuto = 250;
        valorDatos = 8000;
        break;
    default:
        alert("Operador no válido");
        break;
}

let total = cargoFijo + (minutos * valorMinuto) + valorDatos;
alert("El costo total de su paquete es: $" + total);
