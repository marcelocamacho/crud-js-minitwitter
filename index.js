console.log("Mini Twitter")

//[CRUD] Javascript Básico

const miniTwitter = {
    usuarios: [
        {
            username: 'marcelo'
        }
    ],
    posts:[
        {
            id: 1,
            owner: 'marcelo',
            content: 'Meu primeiro tweet'
        }
    ],
};


//CREATE
function criaPost (dados){
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    })
}

//READ
function pegaPosts(){
    return miniTwitter.posts;
}

//UPDATE
function atualizaContentDoPost(id,novoConteudo){
    const postQueVaiSerAtualizado = pegaPosts().find((post)=>{
        return post.id == id;
    });

    postQueVaiSerAtualizado.content = novoConteudo;
}

//DELETE
function apagaPost(id){
    const listaDePostsAtualizada = pegaPosts().filter((posts) => {
        return posts.id != id;
    })
    miniTwitter.posts = listaDePostsAtualizada;
}

console.log(miniTwitter)
criaPost({owner: 'marcelo',content: 'Segundo Tweet'})
criaPost({owner: 'marcelo',content: 'Terceiro Tweet'})
atualizaContentDoPost(2,'Conteudo editado');
criaPost({owner: 'marcelo',content: 'Quarto Tweet'})
apagaPost(1)
console.log(pegaPosts())