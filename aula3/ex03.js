// Exercício 3 – Busca e filtro

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 80 },
  { id: 3, nome: "Teclado", preco: 150 },
  { id: 4, nome: "Monitor", preco: 900 }
];

// Busca o produto com id === 3
const produtoEncontrado = produtos.find(produto => produto.id === 3);
console.log(`Produto com id 3: ${produtoEncontrado.nome}`);

// Filtra produtos com preço acima de R$ 50,00
const produtosCaros = produtos.filter(produto => produto.preco > 50);

console.log("\nProdutos com preço acima de R$ 50,00:");
for (let i = 0; i < produtosCaros.length; i++) {
  console.log(`- ${produtosCaros[i].nome}: R$ ${produtosCaros[i].preco}`);
}