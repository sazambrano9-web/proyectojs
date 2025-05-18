// Solicitar la edad al usuario
let edad = parseInt(prompt("Por favor, ingresa tu edad:"));

// Verificar y clasificar la edad
if (edad < 0) {
    console.log("Edad no válida");
} else if (edad <= 12) {
    console.log("Niño");
} else if (edad <= 17) {
    console.log("Adolescente");
} else if (edad <= 59) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}