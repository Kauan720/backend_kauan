let alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 6 },
  { nome: "Carla", nota: 9 },
  { nome: "Daniel", nota: 5 },
  { nome: "Eduarda", nota: 7 }
];

// map - adiciona situação (Aprovado/Reprovado)
let alunosComSituacao = alunos.map(aluno => {
  return {
    nome: aluno.nome,
    nota: aluno.nota,
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
  };
});

console.log("Alunos com situação:");
console.log(alunosComSituacao);

// filter - aprovados
let aprovados = alunosComSituacao.filter(aluno => aluno.situacao === "Aprovado");

// média geral
let somaNotas = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
let media = somaNotas / alunos.length;

// resultados finais
console.log("\nQuantidade de aprovados:", aprovados.length);
console.log("Média da turma:", media.toFixed(2));