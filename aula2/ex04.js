// Exercício 4 – Função executora (Callback)

function executarOperacao(a, b, operacao) {
  const resultado = operacao(a, b);
  console.log(resultado);
}

// Testes com Arrow Functions
executarOperacao(10, 3, (a, b) => a + b); // deve exibir 13
executarOperacao(10, 3, (a, b) => a * b); // deve exibir 30
executarOperacao(10, 3, (a, b) => a - b); // deve exibir 7