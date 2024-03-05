console.log("Hello World");
const nombre = "Maria"; // constante 
let apellido = "Rosas"; // Variable

const edad= 19;
console.log("Mi edad es: ", edad);

const esMayorDeEdad = true; //Las variables siempre empiezan con minuscula
console.log("Es mayor de edad", esMayorDeEdad);

const NotaA = 5;
const NotaB = 4;

const promedio = (NotaA+NotaB) /2;
console.log("El promedio es", promedio);

const nombreCompleto = nombre + " " + apellido; //concatenar
console.log("Mi nombre completo es", nombreCompleto)

const tipoDeDato = typeof nombreCompleto;
console.log(tipoDeDato)

const numero= parseInt("5");
console.log(numero, typeof numero);

const edadPorConsola = parseInt(prompt("Ingrese su edad"))
console.log(edadPorConsola, typeof edadPorConsola)