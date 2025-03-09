const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el número de jugadores (1 o 2): ", (jugadores) => {
    let Primera_cartaCa = Math.floor(Math.random() * 11) + 1;
    let segunda_cartaCa = Math.floor(Math.random() * 11) + 1;
    let puntaje_casino = Primera_cartaCa + segunda_cartaCa;
    console.log("La primera carta del casino es: " + Primera_cartaCa);
    
    switch (parseInt(jugadores)) {
        case 1:
            jugarJugador("Jugador", puntaje_casino);
            break;
        case 2:
            jugarJugador("J1", puntaje_casino);
            jugarJugador("J2", puntaje_casino);
            break;
        default:
            console.log("Número de jugadores no válido.");
            rl.close();
    }
});

function jugarJugador(nombre, puntaje_casino) {
    let Primera_carta = Math.floor(Math.random() * 11) + 1;
    let segunda_carta = Math.floor(Math.random() * 11) + 1;
    let puntaje_jugador = Primera_carta + segunda_carta;
    
    console.log(`${nombre}, tu primera carta es: ${Primera_carta}`);
    console.log(`${nombre}, tu segunda carta es: ${segunda_carta}`);
    
    rl.question(`${nombre}, ¿quieres pedir otra carta? (si/no): `, (respuesta) => {
        if (respuesta.toLowerCase() === "si") {
            let tercera_carta = Math.floor(Math.random() * 11) + 1;
            puntaje_jugador += tercera_carta;
            console.log(`${nombre}, tu tercera carta es: ${tercera_carta}`);
        }
        
        console.log(`El casino tiene un total de: ${puntaje_casino}`);
        console.log(`${nombre} tiene un total de: ${puntaje_jugador}`);

        if (puntaje_jugador > 21) {
            console.log(`${nombre}, te pasaste de 21. Perdiste.`);
        } else if (puntaje_jugador < puntaje_casino) {
            console.log(`${nombre}, perdiste.`);
        } else if (puntaje_jugador > puntaje_casino) {
            console.log(`${nombre}, ganaste!`);
        } else {
            console.log(`${nombre}, empate.`);
        }
        rl.close();
    });
}
