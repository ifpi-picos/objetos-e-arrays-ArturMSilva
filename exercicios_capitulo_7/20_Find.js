// Crie um array de objetos representando pessoas com nome 
// e idade, e use find para encontrar a primeira pessoa com idade maior que 18.

const pessoas = [
    {nome: "Artur", idade: 19},
    {nome: "Chicosvaldo", idade: 15},
    {nome: "Lorisvinin", idade: 17},
    {nome: "Gabrieslisck", idade: 18}

]

console.log(pessoas.find((pessoas) => pessoas.idade > 18))