export const pesquisarItem = (lista) => {
    let item = prompt("Digite o nome do item que deseja encontrar:")
    if (lista.includes(item)){
        let itemProcurado = lista.find((itemEncontrado) => itemEncontrado === item)
        console.log(`${itemProcurado} está na sua lista de compras.`);
    } else {
        console.log("Seu item não está na lista de compras.");
    }
}