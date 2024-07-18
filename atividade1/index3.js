// Crie um Objeto produto com as propriedades nome,preco e quantidade. Em
// seguida, calcule e imprima o valor total do estoque (preço * quantidade).

const produtos = {
    nome: 'Camiseta',
    preco: 20,
    quantidade: 5
  }
  
  console.log("Valor do Estoque:", 'R$',(produtos.preco * produtos.quantidade).toFixed(2))