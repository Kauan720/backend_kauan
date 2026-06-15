const readline = require("readline-sync");

// Função principal que recebe o callback (operação)
function calcular(a, b, operacao) {
  return operacao(a, b);
}

// Arrow Functions das operações
const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;

// Entrada de dados
let a = Number(readline.question("Digite o primeiro número: "));
let b = Number(readline.question("Digite o segundo número: "));

console.log("\nEscolha a operação:");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");

let opcao = Number(readline.question("Opção: "));

// Processamento
let resultado;

if (opcao === 1) {
  resultado = calcular(a, b, soma);
  console.log(`Resultado da soma: ${resultado}`);
} 
else if (opcao === 2) {
  resultado = calcular(a, b, subtracao);
  console.log(`Resultado da subtração: ${resultado}`);
} 
else if (opcao === 3) {
  resultado = calcular(a, b, multiplicacao);
  console.log(`Resultado da multiplicação: ${resultado}`);
} 
else {
  console.log("Opção inválida!");
}