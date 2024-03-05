const nomUser = prompt("Escribe tu nombre");
const apeUser = prompt("Escribe tu apellido");
const bornYear = parseInt(prompt("Escribe tu año de nacimiento"));
const calculo= 2024-bornYear;
const bornDay = parseInt(prompt("Escribe tu día de nacimiento"));
const bornMonth = prompt("Escribe tu mes de nacimiento");
console.log("Mi nombre es",nomUser,apeUser,",mi edad es",calculo,"y nací el",bornDay,"de",bornMonth,"del",bornYear);