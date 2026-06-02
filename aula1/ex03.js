const prompt = require('readline-sync');


let soma = 0;

for (let i = 1; i <= 5; i++) {
    let nota = Number(prompt.question(`Digite a ${i}ª nota:`));
    soma += nota;
}

let media = soma / 5;

console.log(`Média: ${media.toFixed(2)}`);

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
