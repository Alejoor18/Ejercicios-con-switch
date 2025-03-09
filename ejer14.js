let opcion = prompt("Ingrese el tamaño del sándwich (pequeño o grande):");
let precioBase = 0;

switch (opcion) {
    case "pequeño":
        precioBase = 6000;
        break;
    case "grande":
        precioBase = 12000;
        break;
    default:
        alert("Opción no válida");
        precioBase = 0;
}

if (precioBase > 0) {
    let total = precioBase;
    let ingredientes = ["tocineta", "pavo", "queso"];
    let precios = { tocineta: 3000, pavo: 3000, queso: 2500 };

    ingredientes.forEach(ingrediente => {
        let respuesta = prompt(`¿Desea ${ingrediente}? (sí o no)`);
        if (respuesta === "sí") {
            total += precios[ingrediente];
        }
    });
    
    alert("El costo total de su sándwich es: $" + total);
}
