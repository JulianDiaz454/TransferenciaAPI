import { getPostById, getCommentByPost } from "./modules/consultas.js";

const buscarPublicacionEspecifica = async (id) => {
    // Buscamos directamente el post por ID (Petición específica)
    const postEncontrado = await getPostById(id);

    // Validamos si existe
    if (postEncontrado) {
        // Traemos solo los comentarios de ESE post (Petición específica)
        const comentariosDelPost = await getCommentByPost(id);

        // Construimos el detalle final
        const detalleFinal = {
            titulo: postEncontrado.title,
            contenido: postEncontrado.body,
            total_comentarios: comentariosDelPost.length
        };

        console.log(`Publicación con ID ${id}:`);
        console.log(detalleFinal);

    } else {
        console.log(`La publicación con ID ${id} no se encontró`);
    }
}

buscarPublicacionEspecifica(3);