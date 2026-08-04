// Exercício 4 – Transformação com map

const alunos = [
  { id: 1, nome: "Ana", nota: 8.5 },
  { id: 2, nome: "Bruno", nota: 6.0 },
  { id: 3, nome: "Carla", nota: 9.0 },
  { id: 4, nome: "Diego", nota: 5.5 },
  { id: 5, nome: "Elena", nota: 7.0 }
];

// Gera novo array com nome, nota e situacao
const resultado = alunos.map(aluno => {
  return {
    nome: aluno.nome,
    nota: aluno.nota,
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
  };
});

// Exibe o resultado
console.log(resultado);