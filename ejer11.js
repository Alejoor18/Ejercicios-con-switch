let pitido = prompt("¿La computadora emite un pitido al iniciar? (si/no)");
let discoGira = prompt("¿El disco duro gira? (si/no)");

switch (true) {
    case (pitido === "si" && discoGira === "si"):
        alert("Póngase en contacto con el técnico de apoyo");
        break;
    case (pitido === "si" && discoGira === "no"):
        alert("Verificar contactos de la unidad");
        break;
    case (pitido === "no" && discoGira === "no"):
        alert("Traiga la computadora para repararla en la central");
        break;
    default:
        alert("Compruebe las conexiones de altavoces");
        break;
}
