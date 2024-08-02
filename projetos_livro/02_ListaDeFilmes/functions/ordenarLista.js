import { exibirLista } from "./exibirLista"

export const ordenarLista = (lista) => {
    lista.sort((a, b) => a.titulo.localeCompare(b.titulo))
    console.log("Lista ordenada com sucesso");
    exibirLista(lista)
  }