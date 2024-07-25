// Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.

const ImprimePrimeiroUltimoNome = (nome) => {
    nome = prompt("Insira seu nome completo:").split(' ')
    console.log(`Primeiro nome: ${nome[0]}\nÚltimo nome: ${nome[nome.length -1]}`)
}

ImprimePrimeiroUltimoNome()