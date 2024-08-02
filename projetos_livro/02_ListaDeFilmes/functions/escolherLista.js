export const escolherLista = (numLista, firstList, secondList, funcao) => {
    if (numLista === 1) {
      funcao(firstList)
    } else if (numLista === 2) {
      funcao(secondList)
    } else {
      console.log("Opção inválida!");
    }
  }
  