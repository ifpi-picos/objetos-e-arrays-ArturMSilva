import {adiciona, remove, atualiza, exibe} from "./functions"

let i = true
while (i) {
    console.log("Digite a opção desejada:\n1 - Adicionar\n2 - Remover\n3 - Atualizar\n4 - Exibir\n0 - Sair")
    const opcao = parseInt(prompt(":"))
    switch (opcao) {
        case 1:
            await addUsuario()
            break
        case 2:
            await removeUsuario()
            break
        case 3:
            await atualizaUsuario()
            break
        case 4:
            await exibe()
            break
        case 0:
            i = false
            break
        default:
            console.log("Opção inválida. Tente novamente.")
            break
    }
}

async function addUsuario() {
    const nome = prompt("Digite o nome do novo usuário:")
    const email = prompt("Digite o email do novo usuário:")
    const senha = prompt("Digite a senha do novo usuário:")

    const novoUsuario = {
        nome,
        email,
        senha,
    }

    await adiciona(novoUsuario)
    console.log("Usuário adicionado com sucesso.")
}

async function removeUsuario() {
    const nome = prompt("Nome:")

    const usuario = {
        nome
    }

    await remove(usuario)
    console.log("Usuário removido com sucesso.")
}

async function atualizaUsuario() {
    const nome = prompt("Nome:")
    const email = prompt("Email:")
    const senha = prompt("Senha:")

    const usuario = {
        nome,
        email,
        senha,
    }

    await atualiza(nome, usuario)
}