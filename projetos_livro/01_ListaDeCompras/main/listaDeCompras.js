import { adicionarItem } from "../functions/adicionarItem";
import { excluirItem } from "../functions/excluirItem";
import { exibirLista } from "../functions/exibirLista";
import { pesquisarItem } from "../functions/pesquisarItem";
import { ordenarLista } from "../functions/ordenarLista";
import { limparLista } from "../functions/limparLista";

const menu = `
Lista de Compras

  1 - Adicionar Item
  2 - Excluir Item 
  3 - Exibir Lista
  4 - Pesquisar item
  5 - Ordenar a lista
  6 - Limpar Lista
  0 - Sair
`
let ListaDeCompras = []

let i = true
while(i) {
    console.log(menu)
    let escolha = Number(prompt("Escolha uma opção:"))
    switch(escolha){
        case 1:
            adicionarItem(ListaDeCompras)
            break;
        case 2:
            excluirItem(ListaDeCompras)
            break;
        case 3:
            exibirLista(ListaDeCompras)
            break;
        case 4:
            pesquisarItem(ListaDeCompras)
            break;    
        case 5:
            ordenarLista(ListaDeCompras)
            break;
        case 6:
            ListaDeCompras = limparLista(ListaDeCompras)
            break;
        case 0:
            console.log("Tchau")
            i = false
            break;
        default:
            console.log("Opção Inválida!! Escolha uma opção existente.")
    }
}