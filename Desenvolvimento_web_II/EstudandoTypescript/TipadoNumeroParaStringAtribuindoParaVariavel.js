"use strict";
function calc(x, y) {
    // Função 'calc' que aceita dois parâmetros:
    // - x: número
    // - y: número
    // Retorna uma string no formato "resultado: valor", onde "valor" é a soma de x e y.
    return `resultado: ${x + y}`; // Template literal que insere a soma de x e y na string.
}
// poderia ser também
function calcMsg(x, y, msg) {
    // Função 'calcMsg' que aceita três parâmetros:
    // - x: número
    // - y: número
    // - msg: string (uma mensagem personalizada)
    // Retorna uma string que concatena a mensagem personalizada (msg) e o valor da soma de x e y.
    return `${msg} ${x + y}`; // Template literal que insere a mensagem e a soma de x e y na string.
}
let resultado; // Declara a variável 'resultado' com o tipo 'string'.
resultado = calc(10, 15); // Chama a função 'calc' com os argumentos 10 e 15, e armazena o resultado na variável 'resultado'.
console.log(resultado); // Exibe no console a string retornada pela função 'calc'. Saída esperada: "resultado: 25".
let resultadoMsg; // Declara a variável 'resultadoMsg' com o tipo 'string'.
resultado = calcMsg(10, 23, "O resultado é igual a"); // Chama a função 'calcMsg' com os argumentos 10, 23 e a mensagem personalizada.
console.log(resultado); // Exibe no console a string retornada pela função 'calcMsg'. Saída esperada: "O resultado é igual a 33".
