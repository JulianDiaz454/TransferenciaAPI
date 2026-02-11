import { getComments, deletePost } from "./modules/consultas.js";

const EliminarPublicacion = async (id) => {
    // 1. Consultamos SOLO los comentarios de este post
    const comentariosAsociados = await getComments(id);

    // 2. Usamos la lógica de validación
    if (comentariosAsociados.length > 0) {
        console.warn(`No se puede eliminar la publicación ${id}: tiene ${comentariosAsociados.length} comentarios.`);
    } else {
        // 3. Si está limpio, procedemos a borrar
        const exito = await deletePost(id);

        if (exito) {
            console.log(`Publicación ${id} eliminada con éxito.`);
        } else {
            // Si el servidor responde con error (ej. 404 porque no existía)
            console.error(`Error: La publicación ${id} no pudo ser eliminada (posiblemente no existe).`);
        }
    }
}

// Probando con el ID 5
EliminarPublicacion(5);