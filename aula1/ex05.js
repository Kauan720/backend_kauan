const input = require('readline-sync');

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = Number(input.question(`Digite o ${i}° número: `));

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Pares: ${pares}`);
console.log(`Ímpares: ${impares}`);