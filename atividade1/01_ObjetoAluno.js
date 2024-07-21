//Crie um objeto para representar um aluno, incluindo 
//propriedades comos nome, idade, curso e notas. Popule o 
//objeto com valores e imprima os dados do aluno

const aluno = {
    nome: 'João Pedro',
    idade: 18,
    curso: 'ADS',
    notas: [5, 7, 8]
  }
  
  for (let i in aluno){
    console.log(i + ': ' + aluno[i])
  }
