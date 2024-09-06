// Importa o módulo prompt-sync
import promptSync = require('prompt-sync');


// Cria uma instância do prompt-sync
const prompt = promptSync();

let numbers : Array<number> = []  

for (let i = 1; i <= 10; i++) {
    
    numbers.push(i)
}

let input = prompt('Digite um numero maior que 10: ');

let userNumber = parseFloat(input);

console.log(numbers);

numbers.push(userNumber);

console.log(numbers);