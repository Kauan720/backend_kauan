function reverter(array) {
  let resultado = [];

  for (let i = array.length - 1; i >= 0; i--) {
    resultado.push(array[i]);
  }

  return resultado;
}

// Teste
let numeros = [1, 2, 3, 4, 5];

console.log("Array original:", numeros);
console.log("Array invertido:", reverter(numeros));