const input = require('readline-sync');

let numero = Number(input.question("Digite um número: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}