let produtos = [
  { id: 1, nome: "Teclado", preco: 80 },
  { id: 2, nome: "Mouse", preco: 50 },
  { id: 3, nome: "Monitor", preco: 600 },
  { id: 4, nome: "Headset", preco: 150 },
  { id: 5, nome: "Notebook", preco: 3000 }
];

// a) find - produto com id 3
let produtoId3 = produtos.find(p => p.id === 3);
console.log("Produto com id 3:", produtoId3);

// b) filter - produtos com preço acima de 100
let caros = produtos.filter(p => p.preco > 100);
console.log("Produtos com preço acima de 100:", caros);

// c) map - apenas nomes dos produtos
let nomes = produtos.map(p => p.nome);
console.log("Nomes dos produtos:", nomes);

// d) forEach - exibir formatado
console.log("\nLista de produtos:");
produtos.forEach(p => {
  console.log(`ID: ${p.id} | Nome: ${p.nome} | Preço: R$ ${p.preco}`);
});