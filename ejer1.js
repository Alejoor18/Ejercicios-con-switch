let horas = parseInt(prompt("Ingrese el número de horas trabajadas:"));
let tarifa;

switch (true) {
    case (horas <= 10):
        tarifa = 30000;
        break;
    default:
        tarifa = 33000;
        break;
}

let salario = horas * tarifa;

alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario es $${salario}`);