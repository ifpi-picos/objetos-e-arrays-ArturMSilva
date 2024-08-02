export const excluirFilme = (lista) => {
    let nomeFilme = prompt("Digite o nome do filme que deseja excluir:")

      let filmeEncontradoIndex = lista.findIndex(filme => filme.titulo === nomeFilme);

      if (filmeEncontradoIndex >= 0 && filmeEncontradoIndex < lista.length){
        lista.splice(filmeEncontradoIndex, 1)
        console.log("Filme removido com sucesso!")
      } else {
        console.log("Filme não encontrado.")
      }
  }