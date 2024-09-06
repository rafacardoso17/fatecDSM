"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o módulo prompt-sync
const promptSync = require("prompt-sync");
// Cria uma instância do prompt-sync
const prompt = promptSync();
let numbers = [];
for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}
let input = prompt('Digite um numero maior que 10: ');
let userNumber = parseFloat(input);
console.log(numbers);
numbers.push(userNumber);
console.log(numbers);
