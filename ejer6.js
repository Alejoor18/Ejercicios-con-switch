let n1 = parseInt(prompt("Ingrese el primer número:"));
let n2 = parseInt(prompt("Ingrese el segundo número:"));
let n3 = parseInt(prompt("Ingrese el tercer número:"));

let mayor;
switch (true) {
    case (n1 >= n2 && n1 >= n3):
        mayor = n1;
        break;
    case (n2 >= n1 && n2 >= n3):
        mayor = n2;
        break;
    default:
        mayor = n3;
        break;
}

alert("El número mayor es: " + mayor);

