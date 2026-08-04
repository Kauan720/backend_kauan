// Exercício 1 – Ficha do aluno

const aluno = {
  nome: "Grok",
  idade: 1,
  cidade: "São Paulo",
  curso: "JavaScript"
};

// Exibe cada propriedade com Template String
console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Cidade: ${aluno.cidade}`);
console.log(`Curso: ${aluno.curso}`);

// Modifica a cidade
aluno.cidade = "Rio de Janeiro";

// Exibe novamente
console.log("\n--- Após modificar a cidade ---");
console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Cidade: ${aluno.cidade}`);
console.log(`Curso: ${aluno.curso}`);