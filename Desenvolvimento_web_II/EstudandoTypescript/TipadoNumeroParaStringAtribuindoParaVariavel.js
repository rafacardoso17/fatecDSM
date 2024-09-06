function calc(x, y) {
    return "resultado: ".concat(x + y);
}
// poderia ser também
function calcMsg(x, y, msg) {
    return "".concat(msg, " ").concat(x + y);
}
var resultado;
resultado = calc(10, 15);
console.log(resultado);
var resultadoMsg;
resultado = calcMsg(10, 23, "O resultado é igual a ");
console.log(resultado);
