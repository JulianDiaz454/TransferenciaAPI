const EliminarPublicacion = async (id) => {
    // Hacemos la petición de datos
    const respuestaComentarios = await fetch('http://localhost:3000/comments');
    const listaComentarios = await respuestaComentarios.json();

    // Filtramos los comentarios del ID de publicación
    const comentariosEncontrados = listaComentarios.filter(comentario => 
        Number(comentario.postId) === Number(id)
    );

    // Validamos que haya al menos un comentario
    if (comentariosEncontrados.length > 0) { // Si hay comentarios no eliminamos la publicación
        console.log("No se puede eliminar la publicación porque tiene comentarios");
    } else { // Si no habian comentarios usamos delete
        const respuestaBorrado = await fetch(`http://localhost:3000/posts/${id}`, {
            method: 'DELETE'
        });

        if (respuestaBorrado.ok) {
            // Validamos que se haya eliminado el post
            const validar = await fetch(`http://localhost:3000/posts/${id}`);
            if (validar.status === 404) {
                console.log("El post no existe en la base de datos");
            }
        } else {
            console.log("La publicación no se pudo eliminar");
        }
    }
}

EliminarPublicacion(5);