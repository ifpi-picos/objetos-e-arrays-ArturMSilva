// Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro nome.

const ImprimePrimeiroNome = (nome) => {
    nome = prompt("Insira seu nome completo:").split(' ')
    console.log(`Primeiro nome: ${nome[0]}`)
}

ImprimePrimeiroNome()