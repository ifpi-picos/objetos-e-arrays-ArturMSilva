import { exibirLista } from "./exibirLista"

export const excluirItem = (lista) => {
    exibirLista(lista)
    if (lista.length > 0){
        let item = Number(prompt("Digite o índice do item que deseja excluir:"))
        lista.splice(item, 1)      
    } 
}