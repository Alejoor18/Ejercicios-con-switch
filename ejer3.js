let tipoLavadora = parseInt(prompt("Ingrese el tipo de lavadora (1 para grande, 2 para pequeña):"));
let cantidad = parseInt(prompt("Ingrese la cantidad de lavadoras alquiladas:"));
let horas = parseInt(prompt("Ingrese las horas de alquiler:"));

let costoPorHora;
switch (tipoLavadora) {
    case 1:
        costoPorHora = 4000;
        break;
    case 2:
        costoPorHora = 3000;
        break;
    default:
        alert("Tipo de lavadora no válido.");
        costoPorHora = 0;
}

let costoTotal = cantidad * horas * costoPorHora;

switch (true) {
    case (cantidad > 3):
        let descuento = costoTotal * 0.03;
        costoTotal -= descuento;
        break;
}

alert("Costo total por alquilar " + cantidad + " lavadoras tipo " + tipoLavadora + " por " + horas + " horas: $" + costoTotal);

