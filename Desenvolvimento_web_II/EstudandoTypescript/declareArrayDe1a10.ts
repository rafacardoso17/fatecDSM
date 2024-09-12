// Importa o módulo prompt-sync, uma biblioteca que permite a leitura de entradas
// do usuário no terminal de forma síncrona. A sintaxe `require` é usada aqui
// para compatibilidade com o padrão CommonJS, que o Node.js segue.
import promptSync = require('prompt-sync');

// Cria uma instância da função retornada pelo prompt-sync, que será usada
// para capturar entradas do usuário. A função `promptSync()` retorna uma função
// que pode ser chamada para solicitar entrada no terminal.
const prompt = promptSync();

// Inicializa uma array chamada `numbers`, que vai armazenar números do tipo `number`.
// Aqui foi utilizada a sintaxe `Array<number>` que é equivalente a `number[]` em TypeScript.
let numbers: Array<number> = [];

// Um laço `for` é iniciado para iterar de 1 até 10 (inclusive). O loop vai executar 10 vezes.
// A variável `i` começa com valor 1 e é incrementada a cada iteração até atingir 10.
// Em cada iteração, o valor de `i` é adicionado ao array `numbers` usando o método `push`.
for (let i = 1; i <= 10; i++) {
    numbers.push(i);  // Adiciona o número atual de `i` ao array `numbers`.
}

// Aqui, uma mensagem é exibida no terminal pedindo ao usuário para digitar um número.
// O valor que o usuário digitar será capturado pela função `prompt` e armazenado na variável `input`.
// O número solicitado deve ser maior que 10, conforme a mensagem sugere, mas essa validação
// não é feita explicitamente no código (então o usuário poderia digitar qualquer valor).
let input = prompt('Digite um numero maior que 10: ');

// A função `parseFloat` é usada para converter a string que o usuário digitou (`input`)
// em um número de ponto flutuante (ou seja, um número decimal).
// O valor convertido é armazenado na variável `userNumber`.
let userNumber = parseFloat(input);

// Imprime o array `numbers` no console, que neste ponto contém os números de 1 a 10.
console.log(numbers);

// O número que o usuário digitou (convertido para número pelo `parseFloat`)
// é adicionado ao array `numbers` usando o método `push`.
numbers.push(userNumber);

// Imprime novamente o array `numbers`, agora com o número inserido pelo usuário
// adicionado ao final do array.
console.log(numbers);
