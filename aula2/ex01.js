// Exercício 1 – Calculadora com funções

// ===== Funções =====
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Erro: divisao por zero";
  }
  return a / b;
}
// ===================

// Lê os dois números
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

// Exibe os quatro resultados
console.log("Soma:", somar(num1, num2));
console.log("Subtração:", subtrair(num1, num2));
console.log("Multiplicação:", multiplicar(num1, num2));
console.log("Divisão:", dividir(num1, num2));