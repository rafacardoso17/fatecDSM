"use strict";
function verificandoTipo(x) {
    // A função 'verificandoTipo' aceita um parâmetro 'x' que pode ser do tipo 'string' ou 'number'.
    // O retorno da função é do tipo 'boolean', ou seja, ela retornará 'true' ou 'false'.
    if (typeof x === "string") {
        // Se 'x' for uma string, retorna 'true'.
        return true;
    }
    else if (typeof x === "number") {
        // Se 'x' for um número, retorna 'false'.
        return false;
    }
    // Caso o tipo de 'x' não seja 'string' nem 'number', chama a função 'fail' para lançar um erro.
    return fail("Esse método não aceita esse tipo de tipo!");
}
function fail(message) {
    // A função 'fail' aceita uma mensagem do tipo 'string'.
    // O tipo de retorno 'never' significa que essa função nunca retorna um valor (ela sempre lança um erro ou interrompe o programa).
    throw new Error(message); // Lança uma exceção com a mensagem fornecida.
}
// Teste da função 'verificandoTipo' com um número.
console.log(verificandoTipo(3)); // Deve retornar 'false', pois 3 é um número.
// Teste da função 'verificandoTipo' com uma string.
console.log(verificandoTipo('Texto')); // Deve retornar 'true', pois 'Texto' é uma string.
console.log(verificandoTipo('Rafael'));
