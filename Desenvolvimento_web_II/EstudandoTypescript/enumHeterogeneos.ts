export enum DiaHeterogeneoSemana {
    Domingo = 'Domingo',
    Segunda = 2,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado =17,    
}

console.log(DiaHeterogeneoSemana.Domingo);
console.log(DiaHeterogeneoSemana['Domingo']);

console.log(DiaHeterogeneoSemana['Terca']);
console.log(DiaHeterogeneoSemana[2]);

console.log(DiaHeterogeneoSemana['Quarta']);
console.log(DiaHeterogeneoSemana['Quinta']);
console.log(DiaHeterogeneoSemana['Sexta']);
console.log(DiaHeterogeneoSemana['Sabado']);
console.log(DiaHeterogeneoSemana['Domingo']);

