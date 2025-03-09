let numero = 8; // por ejemplo 8 pero ps se puede cambiar por cualquiera, o se puede agregar el comando de el numer aleatorio

switch (numero % 2) {
    case 0:
        console.log("El número " + numero + " es par.");
        break;
    default:
        console.log("El número " + numero + " es impar.");
        break;
}
