const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

console.log("Soma:", num1 + num2);
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);

if (num2 !== 0) {
    console.log("Divisão:", num1 / num2);
} else {
    console.log("Erro: não é possível dividir por zero.");
}
