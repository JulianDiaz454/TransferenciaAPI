// Función para obtener el post mediante su id
export const getPostById = async (id) => {
    const consulta = await fetch(`http://localhost:3000/posts?id=${id}`);
    const resultadoPost = await consulta.json();
    // Retornamos el primer elemento directamente o null si no existe
    return resultadoPost.length > 0 ? resultadoPost[0] : null;
}

// Función para obtener los comentarios de un post por su id
export const getCommentByPost = async (postId) => {
    const consultaComentarios = await fetch(`http://localhost:3000/comments?postId=${postId}`);
    return await consultaComentarios.json();
}   