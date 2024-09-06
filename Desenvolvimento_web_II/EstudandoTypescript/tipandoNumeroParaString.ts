import PromptSync from "prompt-sync";
const prompt = PromptSync();
let x = prompt("Digite um numero para x: ");
let y = prompt("Digite um numero para y: ");
function calc(x: number, y: number): string{
    return `resultado: ${x + y}`;
}

console.log(calc(parseFloat(x), parseInt(y)));