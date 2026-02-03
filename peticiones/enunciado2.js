const AnalizarComentarios = async () => {
    // Consultamos la lista de publicaciones y la convertimos a JSON
    const respuestaPosts = await fetch('http://localhost:3000/posts');
    const listaDePosts = await respuestaPosts.json();

    // Consultamos la lista de comentarios y la convertimos a JSON
    const respuestaComments = await fetch('http://localhost:3000/comments');
    const listaDeComentarios = await respuestaComments.json();

    const reporteFinal = [];

    // Bucle para recorrer la lista de publicaciones
    for (const publicacion of listaDePosts) {
        // Filtramos usando Number para tener el mismo tipo de dato
        const comentariosAsociados = listaDeComentarios.filter(comentario => 
            Number(comentario.postId) === Number(publicacion.id)
        );
        
        const totalComentarios = comentariosAsociados.length;

        let estadoInteraccion = "";
        if (totalComentarios > 0) {
            estadoInteraccion = "Con comentarios";
        } else {
            estadoInteraccion = "Sin comentarios";
        }

        const datosPublicacion = {
            titulo: publicacion.title,
            cantidad_comentarios: totalComentarios,
            estado: estadoInteraccion
        };

        reporteFinal.push(datosPublicacion);
    }
    
    console.log("Reporte de publicaciones y comentarios:");
    console.log(reporteFinal);
}

AnalizarComentarios();