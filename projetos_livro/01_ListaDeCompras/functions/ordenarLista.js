import { exibirLista } from "./exibirLista"

export const ordenarLista = (lista) => {
    lista.sort((a, b) => a.localeCompare(b))
    exibirLista(lista)
}