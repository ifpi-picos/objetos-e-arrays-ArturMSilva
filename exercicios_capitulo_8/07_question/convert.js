// Escreva um programa em JavaScript que utilize a biblioteca 
// convert para converter dias em minutos e gigabytes em bytes.

import {convert} from 'convert'

console.log("CONVERTENDO DIAS EM MINUTOS");
const dia = Number(prompt("Número de dias:"))
const minutos = convert(dia, 'days').to("minutes")

console.log(`\n${dia} dia(s) é equivalente a ${minutos} minuto(s).\n`)

console.log("CONVERTENDO GIGABYTES EM BYTES");
const gigabyte = Number(prompt("Número de gigabytes:"))
const bytes = convert(gigabyte, 'gigabytes').to("bytes")

console.log(`\n${gigabyte} gigabyte(s) é equivalente a ${bytes} byte(s).\n`)
