"use strict";
function calc(x, y) {
    return `resultado: ${x + y}`;
}
// poderia ser também
function calcMsg(x, y, msg) {
    return `${msg} ${x + y}`;
}
let resultado;
resultado = calc(10, 15);
console.log(resultado);
let resultadoMsg;
resultado = calcMsg(10, 23, "O resultado é igual a ");
console.log(resultado);
