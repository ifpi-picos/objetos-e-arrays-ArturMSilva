export const pesquisarFilme = (lista) => {
    const nomeFilme = prompt("Digite o nome do filme que deseja encontrar:")
    let filmeEncontradoIndex = lista.findIndex(filme => filme.titulo === nomeFilme);
      
    if (filmeEncontradoIndex >= 0 && filmeEncontradoIndex < lista.length){
        console.table(lista[filmeEncontradoIndex])
      } else {
      console.log("Filme não encontrado.")
    }
  }