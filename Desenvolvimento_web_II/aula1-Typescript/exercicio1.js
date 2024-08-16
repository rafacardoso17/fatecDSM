"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
var prompt = PromptSync();
var numberString = prompt("Digite um numero inteiro: ");
var numberInt = parseInt(numberString);
var menosUm = numberInt - 1;
var menosdois = numberInt - 2;
var maisUm = numberInt + 1;
var maisDois = numberInt + 2;
console.log("O número digitado foi " + numberInt +
    " e seus dois antecessores são " + (numberInt - 2) + " e " + (numberInt - 1) +
    ". Já seus dois sucessores são " + (numberInt + 1) + " e " + (numberInt + 2) + ". ");
