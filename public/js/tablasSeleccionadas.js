// Pedir al usuario el tipo de tablas que desea ver
let tipo = prompt("¿Qué tablas deseas ver? Escribe 'pares' o 'impares':").toLowerCase();


if (tipo === "pares") {
    console.log("Mostrando tablas de multiplicar de números pares (2 al 10):");
    for (let i = 2; i <= 10; i += 2) {
        console.log(`\nTabla del ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
} else if (tipo === "impares") {
    console.log("Mostrando tablas de multiplicar de números impares (1 al 9):");
    for (let i = 1; i < 10; i += 2) {
        console.log(`\nTabla del ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
} else {
    console.log("Opción no válida. Escribe 'pares' o 'impares'.");
}