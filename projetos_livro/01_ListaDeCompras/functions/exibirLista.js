export const exibirLista = (lista) => {
    if (lista.length > 0){
        lista.forEach((compra, index) => console.log(`${index} - ${compra}`))
    } else {
        console.log("A lista de compras está vazia.");
    }
}