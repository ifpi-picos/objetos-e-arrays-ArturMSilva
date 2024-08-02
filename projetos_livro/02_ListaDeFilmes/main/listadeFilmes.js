import {adicionarFilme} from "../functions/adicionarFilme"
import { ordenarLista } from "../functions/ordenarLista"
import { pesquisarFilme } from "../functions/pesquisarFilme"
import { exibirLista } from "../functions/exibirLista"
import { marcarComoAssistido } from "../functions/marcarComoAssistido"
import { excluirFilme } from "../functions/excluirFilme"
import { limparLista } from "../functions/limparLista"
import { escolherLista } from "../functions/escolherLista"

const menu = `
MENU - Lista de Filmes

  1 - Adicionar Filme
  2 - Ordenar a Lista 
  3 - Pesquisar Filme
  4 - Exibir Lista 
  5 - Marcar como Assistido
  6 - Remover Filme
  7 - Limpar Lista
  0 - Sair
`
let listaDeFilmes = []
let filmesAssistidos = []

let i = true
while(i) {
    console.log(menu)
    let escolha = Number(prompt("Escolha uma opção:"))
    switch(escolha){
        case 1:
            adicionarFilme(listaDeFilmes)
            break;
        case 2:
            let listaOrdenar = Number(prompt("Qual lista deseja ordenar?\n 1 - Lista de Filmes\n 2 - Lista de Assistidos\n"))
            escolherLista(listaOrdenar, listaDeFilmes, filmesAssistidos, ordenarLista)
            break;
        case 3:
            let filmePesquisar = Number(prompt("Em qual lista deseja pesquisar?\n 1 - Lista de Filmes\n 2 - Lista de Assistidos\n"))
            escolherLista(filmePesquisar, listaDeFilmes, filmesAssistidos, pesquisarFilme)
            break;
        case 4:
            let listaExibir = Number(prompt("Qual lista deseja exibir?\n 1 - Lista de Filmes\n 2 - Lista de Assistidos\n"))
            escolherLista(listaExibir, listaDeFilmes, filmesAssistidos, exibirLista)
            break;    
        case 5:
            marcarComoAssistido(listaDeFilmes, filmesAssistidos)
            break;
        case 6:
            let filmeExcluir = Number(prompt("Deseja apagar filme de qual lista?\n 1 - Lista de Filmes\n 2 - Lista de Assistidos\n"))
            escolherLista(filmeExcluir, listaDeFilmes, filmesAssistidos, excluirFilme)
            break;
        case 7:
            let escolhaLista = Number(prompt("Qual lista deseja limpar?\n 1 - Lista de Filmes\n 2 - Lista de Assistidos\n"))
            escolherLista(escolhaLista, listaDeFilmes, filmesAssistidos, limparLista)
            break;
        case 0:
            console.log("Obrigado pela preferência! Até logo!")
            i = false
            break;
        default:
            console.log("Opção Inválida!! Escolha uma opção existente.")
    }
}