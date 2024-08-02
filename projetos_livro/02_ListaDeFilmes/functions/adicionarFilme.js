export const adicionarFilme = (lista) => {
    let tituloFilme = prompt("Digite o título do filme que deseja adicionar: ")
    let anoDeLancamento = Number(prompt("Digite o ano de lançamento do filme: "))
  
    let filme = {
      titulo: tituloFilme,
      ano: anoDeLancamento
    }
    lista.push(filme)
    console.log("Filme adicionado com sucesso!")
  }