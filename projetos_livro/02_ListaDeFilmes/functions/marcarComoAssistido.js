export const marcarComoAssistido = (lista, lista1) => {
    const filmeAssistido = prompt("Digite o título do filme assistido:")
    const filmeEncontradoIndex = lista.findIndex(filme => filme.titulo === filmeAssistido);
  
    if (filmeEncontradoIndex >= 0 && filmeEncontradoIndex < lista.length){
      lista1.push(lista[filmeEncontradoIndex])
      lista.splice(filmeEncontradoIndex, 1)
      console.log("O filme foi marcado como assistido!")
  } else{
      console.log("Filme não encontrado.");
  }
}