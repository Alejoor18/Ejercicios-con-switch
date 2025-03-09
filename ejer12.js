let modelo = prompt("Ingrese el número de modelo de su automóvil:");

let modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

switch (modelosDefectuosos.includes(parseInt(modelo))) {
    case true:
        alert("El automóvil está defectuoso, llevar a garantía.");
        break;
    default:
        alert("El modelo ingresado no presenta defectos conocidos.");
        break;
}
