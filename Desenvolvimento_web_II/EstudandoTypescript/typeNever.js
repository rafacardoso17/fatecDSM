"use strict";
function verificandoTipo(x) {
    if (typeof x === "string") {
        return true;
    }
    else if (typeof x === "number") {
        return false;
    }
    return fail("Esse método não aceita esse tipo de type!");
}
function fail(message) { throw new Error(message); }
console.log(verificandoTipo(3));
console.log(verificandoTipo('Texto'));
