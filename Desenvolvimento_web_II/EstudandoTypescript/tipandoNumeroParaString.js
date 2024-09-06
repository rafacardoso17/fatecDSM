"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let x = prompt("Digite um numero para x: ");
let y = prompt("Digite um numero para y: ");
function calc(x, y) {
    return `resultado: ${x + y}`;
}
console.log(calc(parseFloat(x), parseInt(y)));
