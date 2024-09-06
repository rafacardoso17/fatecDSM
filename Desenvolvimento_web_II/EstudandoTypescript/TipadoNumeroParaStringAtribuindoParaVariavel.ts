function calc(x: number, y: number,): string{
    return `resultado: ${x + y}`;
}

// poderia ser também
function calcMsg(x: number, y: number, msg: string): string{
    return `${msg} ${x + y}`;
}

let resultado : string;
resultado = calc(10, 15);
console.log(resultado);

let resultadoMsg : string;
resultado = calcMsg(10, 23, "O resultado é igual a ");
console.log(resultado);
