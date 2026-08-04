// Exercício 2 – Lista de produtos

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 80 },
  { id: 3, nome: "Teclado", preco: 150 },
  { id: 4, nome: "Monitor", preco: 900 }
];

// Percorre o array com for e exibe cada produto
for (let i = 0; i < produtos.length; i++) {
  console.log(`ID: ${produtos[i].id} | Nome: ${produtos[i].nome} | Preço: R$ ${produtos[i].preco}`);
}

// Adiciona um quinto produto
produtos.push({ id: 5, nome: "Headset", preco: 250 });

// Exibe o novo tamanho do array
console.log(`\nNovo tamanho do array: ${produtos.length}`);