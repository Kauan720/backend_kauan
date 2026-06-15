const readline = require("readline-sync");

// Função que verifica se pode votar
const podeVotar = (idade) => idade >= 16;

// Leitura da idade
let idade = Number(readline.question("Digite sua idade: "));

// Verificação e saída
if (podeVotar(idade)) {
  console.log(`Idade: ${idade} anos - Pode votar`);
} else {
  console.log(`Idade: ${idade} anos - Não pode votar`);
}