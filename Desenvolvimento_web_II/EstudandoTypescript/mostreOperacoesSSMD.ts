function calcSSMD(x: number, y: number): string {
    return `Soma: ${x + y}\nSubtracao: ${x - y}\nMultiplicacao: ${x * y}\nDivisao: ${x / y}\n `
}

let resultadoSSMD: string;
resultadoSSMD = calcSSMD(3, 5)
console.log(resultadoSSMD)