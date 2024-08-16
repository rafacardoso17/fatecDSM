import PromptSync = require("prompt-sync");

var prompt = PromptSync();

var numberString : string = prompt("Digite um numero inteiro: ");
var numberInt = parseInt(numberString);
var menosUm = numberInt - 1;
var menosdois = numberInt - 2;
var maisUm = numberInt + 1;
var maisDois = numberInt + 2;

console.log("O número digitado foi " + numberInt + 
            " e seus dois antecessores são " + menosUm + " e " + menosdois +
            ". Já seus dois sucessores são " + maisUm + " e " + maisDois + "."
)
