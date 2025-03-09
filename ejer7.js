let genero = prompt("Ingrese su género (femenino/masculino):");
let edad = parseInt(prompt("Ingrese su edad:"));
let ayuda;

switch (genero) {
    case "femenino":
        switch (true) {
            case (edad > 50):
                ayuda = 120000;
                break;
            case (edad >= 30):
                ayuda = 100000;
                break;
            default:
                ayuda = 0;
                break;
        }
        break;
    case "masculino":
        ayuda = 40000;
        break;
    default:
        ayuda = 0;
        break;
}

alert("El valor de ayuda mensual es: $" + ayuda);
