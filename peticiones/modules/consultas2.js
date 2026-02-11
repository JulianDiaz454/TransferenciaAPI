// Función para obtener todos los posts
export const getPosts = async () => {
    const consulta = await fetch(`http://localhost:3000/posts`);
    return await consulta.json();
}

// Función para obtener todos los comentarios 
export const getComments = async () => {
    const consulta = await fetch(`http://localhost:3000/comments`);
    return await consulta.json();
}

// Función para obtener los comentarios mediante un query paramnt
export const getCommentsByPostId = async (postId) => {
    const consulta = await fetch(`http://localhost:3000/comments?postId=${postId}`);
    return await consulta.json();
}