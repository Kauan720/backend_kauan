// Exercício 5 – Mini cadastro (Desafio)

const readlineSync = require("readline-sync");

const produtos = [];

// Lê nome e preço de 3 produtos
for (let i = 1; i <= 3; i++) {
  console.log(`\n--- Produto ${i} ---`);
  const nome = readlineSync.question("Nome do produto: ");
  const preco = Number(readlineSync.question("Preço do produto: "));

  const produto = {
    id: i,
    nome: nome,
    preco: preco
  };

  produtos.push(produto);
}

// Filtra produtos com preço acima de R$ 20,00
const produtosFiltrados = produtos.filter(produto => produto.preco > 20);

console.log("\n=== Produtos com preço acima de R$ 20,00 ===");
if (produtosFiltrados.length === 0) {
  console.log("Nenhum produto encontrado.");
} else {
  produtosFiltrados.forEach(produto => {
    console.log(`- ${produto.nome}: R$ ${produto.preco}`);
  });
}