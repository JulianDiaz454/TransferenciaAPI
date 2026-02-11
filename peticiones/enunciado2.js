import { getPosts, getComments } from "./modules/consultas.js";

const AnalizarComentarios = async () => {
    // Usamos Promise.all para cargar ambos datos al mismo tiempo
    const [listaDePosts, listaDeComentarios] = await Promise.all([
        getPosts(),
        getComments()
    ]);

    // Transformamos el array de posts en el reporte final usando .map()
    const reporteFinal = listaDePosts.map(publicacion => {
        // Filtramos los comentarios que pertenecen a esta publicación
        const comentariosAsociados = listaDeComentarios.filter(comentario => 
            Number(comentario.postId) === Number(publicacion.id)
        );
        
        const total = comentariosAsociados.length;

        // Retornamos el objeto directamente
        return {
            titulo: publicacion.title,
            cantidad_comentarios: total,
            // Usamos un ternario para simplificar el estado
            estado: total > 0 ? "Con comentarios" : "Sin comentarios"
        };
    });
    
    console.log("Reporte de publicaciones y comentarios:");
    console.log(reporteFinal); 
}

AnalizarComentarios();