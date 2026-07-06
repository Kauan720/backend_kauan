const input = require('readline-sync');

const secreto = 42;
let t = 0;
let n;

while (n !== secreto) {
    n = Number(input.question("Número: "));
    t++;

    if (n < secreto) {
        console.log("Maior");
    } else if (n > secreto) {
        console.log("Menor");
    }
}

console.log(`Acertou em ${t} tentativa(s)!`);