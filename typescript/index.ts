import { somaNumeros } from './functions/operacoes';
import { subtraiNumeros } from './functions/operacoes';
import { multiplicaNumeros } from './functions/operacoes';
import { divideNumeros } from './functions/operacoes';

// Função auxiliar para solicitar os números
function solicitarNumeros() {
    let a = Number(prompt("Digite o primeiro número:"));
    let b = Number(prompt("Digite o segundo número:"));
    return [a, b];
}

let i = true;

while (i) {
    console.log("1 - Soma");
    console.log("2 - Subtração");
    console.log("3 - Multiplicação");
    console.log("4 - Divisão");
    console.log("5 - Sair");

    let opcao = Number(prompt("Digite a opção desejada:"));

    switch (opcao) {
        case 5:
            console.log("Saindo do programa...");
            i = false;
            break;
        case 1:
            let [a, b] = solicitarNumeros();
            console.log(`Resultado da soma: ${somaNumeros(a, b)}\n`);
            break;
        case 2:
            [a, b] = solicitarNumeros();
            console.log(`Resultado da subtração: ${subtraiNumeros(a, b)}\n`);
            break;
        case 3:
            [a, b] = solicitarNumeros();
            console.log(`Resultado da multiplicação: ${multiplicaNumeros(a, b)}\n`);
            break;
        case 4:
            [a, b] = solicitarNumeros();
            if (b != 0) {
                console.log(`Resultado da divisão: ${divideNumeros(a, b)}\n`);
            } else {
                console.log("Não é possível realizar a divisão por zero.\n");
            }
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}
