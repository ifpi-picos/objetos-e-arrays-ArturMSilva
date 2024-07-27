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
let ListaDeCompras = ["bala", "abacate"]

const adicionarItem = () => {
    let item = prompt("Digite o item que quer adicionar:")
    ListaDeCompras.push(item)
}

const excluirItem = () => {
    exibirLista()
    if (ListaDeCompras.length > 0){
        let item = Number(prompt("Digite o nome do item que deseja excluir:"))
        ListaDeCompras.splice(item, 1)
    }
   
}

const exibirLista = () => {
    if (ListaDeCompras.length > 0){
        ListaDeCompras.forEach((compra, index) => console.log(`${index} - ${compra}`))
    } else {
        console.log("A lista está vazia.");
    }
}

const pesquisarItem = () => {
    let item = prompt("Digite o nome do item que deseja encontrar:")
    if (ListaDeCompras.includes(item)){
        let itemProcurado = ListaDeCompras.find((itemEncontrado) => itemEncontrado === item)
        console.log(`${itemProcurado} está na sua lista de compras.`);
    } else {
        console.log("Seu item não está na lista.");
    }
}

const ordenarLista = () => {
    ListaDeCompras.sort((a, b) => a.localeCompare(b))
    exibirLista()
}

const limparLista = () => {
    ListaDeCompras = []
    console.log("Limpeza concluída!")
    console.log(ListaDeCompras.length);
}


let i = true
while(i) {
    console.log(menu)
    let escolha = Number(prompt("Escolha uma opção:"))
    switch(escolha){
        case 1:
            adicionarItem()
            break;
        case 2:
            excluirItem()
            break;
        case 3:
            exibirLista()
            break;
        case 4:
            pesquisarItem()
            break;    
        case 5:
            ordenarLista()
            break;
        case 6:
            limparLista()
            break;
        case 0:
            console.log("Tchau")
            i = false
            break;
        default:
            console.log("Opção Inválida!! Escolha uma opção existente.")
    }
}