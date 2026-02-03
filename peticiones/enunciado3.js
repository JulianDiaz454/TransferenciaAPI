const buscarPublicacionEspecifica = async (id) => {
    // Traemos la lista de posts y de comentarios
    const respuestaPosts = await fetch('http://localhost:3000/posts');
    const listaDePosts = await respuestaPosts.json();

    const respuestaComments = await fetch('http://localhost:3000/comments');
    const listaDeComentarios = await respuestaComments.json();

    // Buscamos el post con el ID que se recibio por argumentos
    const postEncontrado = listaDePosts.find(post => Number(post.id) === Number(id));

    // Validamos si el post realmente existe antes de seguir
    if (postEncontrado) {
        
        // Buscamos los comentarios del post
        const comentariosDelPost = listaDeComentarios.filter(comentario => 
            Number(comentario.postId) === Number(id)
        );

        const cantidadComentarios = comentariosDelPost.length;

        // Creamos el objeto con los datos
        const detalleFinal = {
            titulo: postEncontrado.title,
            contenido: postEncontrado.body,
            total_comentarios: cantidadComentarios
        };

        console.log(`Publicación con ID ${id}:`);
        console.log(detalleFinal);

    } else {
        // Mensaje por si el ID no existe en la base de datos
        console.log(`La publicación con ID ${id} no se encontro`);
    }
}

buscarPublicacionEspecifica(1);