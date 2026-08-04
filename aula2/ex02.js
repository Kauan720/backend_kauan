// Exercício 2 – Validador de senha

function validarSenha(senha) {
  return senha.length >= 8;
}

// Lê a senha
let senha = prompt("Digite a senha:");

// Verifica e exibe o resultado
if (validarSenha(senha)) {
  console.log("Senha valida");
} else {
  console.log("Senha fraca – minimo 8 caracteres");
}