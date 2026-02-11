// Función para obtener comentarios de un post específico
export const getComments = async (postId) => {
    const response = await fetch(`http://localhost:3000/comments?postId=${postId}`);
    return await response.json();
}

// Función para eliminar posts mediante su id con retorno de estado
export const deletePost = async (id) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE'
    });
    return response.ok; // Retorna true si se eliminó correctamente
}