import {log} from 'mathjs'

console.log("Calcule o logaritmo de um número")

let numero = Number(prompt("Número:"))
let base = Number(prompt("Base:"))
let logaritmo = log(numero, base)
console.log(`O logaritmo de ${numero} na base ${base} é ${logaritmo}.`);
