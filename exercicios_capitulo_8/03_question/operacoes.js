const soma = (a, b) => {
    return a + b;
}

const subtracao = (a, b) => {
    return a - b;
}

const multiplicacao = (a, b) => {
    return a * b;
}

const divisao = (a, b) => {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
}

const exponenciacao = (base, expoente) => {
    return base ** expoente
}

module.exports = {soma, subtracao, multiplicacao, divisao, exponenciacao};