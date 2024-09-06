export enum DiaDaSemanaPassandoNumeros {
    Dom = 1,
    Seg = 2,
    Ter = 3,
    Qua = 4,
    Qui = 5,
    Sex = 6,
    Sab = 7
}

export enum DiaDaSemanaSemPassarNumeros {
 
    Dom,
    Seg,
    Ter,
    Qua,
    Qui,
    Sex,
    Sab 
}

export enum DiaDaSemanaPassandoValorInicial {
    Dom = 11,
    Seg,
    Ter,
    Qua,
    Qui,
    Sex,
    Sab
}

console.log(DiaDaSemanaPassandoNumeros);
console.log(DiaDaSemanaSemPassarNumeros);
console.log(DiaDaSemanaPassandoValorInicial);

let acessarDia = DiaDaSemanaPassandoNumeros[7];
let acessoDiaNumero = DiaDaSemanaPassandoValorInicial[11];
let acessoDiaString = DiaDaSemanaPassandoValorInicial['Seg'];

console.log(acessarDia + "  ####  " + acessoDiaNumero + "  ####  " + acessoDiaString)