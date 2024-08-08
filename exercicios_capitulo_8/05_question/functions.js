const FILE_NAME = "dadosUsuarios.json"

async function getUsuarios() {
    const file = Bun.file(FILE_NAME);
    const dados = await file.text()  //lê o conteúdo do arquivo e retorna uma Promise
    const usuarios = JSON.parse(dados)
    return usuarios;
} 

export async function adiciona(usuario) {
    const usuarios = await getUsuarios();
    usuarios.push(usuario);
    await Bun.write(FILE_NAME, JSON.stringify(usuarios));
}

export async function remove(usuario) {
    const usuarios = await getUsuarios();
    const index = usuarios.findIndex(u => u.nome === usuario.nome);
    usuarios.splice(index, 1);
    await Bun.write(FILE_NAME, JSON.stringify(usuarios));
}

export async function atualiza(nome, usuario) {
    const usuarios = await getUsuarios();
    const index = usuarios.findIndex(u => u.nome === nome);
    if (index === -1){
        console.log("Usuário não encontrado...");
    } else {
        usuarios[index] = usuario;
        console.log("Usuário atualizado com sucesso.");
    }
    await Bun.write(FILE_NAME, JSON.stringify(usuarios));
}

export async function exibe() {
    const file = Bun.file(FILE_NAME)
    const dados = await file.text()
    const usuarios = JSON.parse(dados)
    console.table(usuarios);
    }