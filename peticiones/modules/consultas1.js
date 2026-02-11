// CONSULTAS GET

// Consulta para tener la lista de usuarios
export const getUsers = async () => {
    const users = await fetch(`http://localhost:3000/users`);
    const data_users = await users.json();
    return data_users; // Retornamos el array de usuarios
} 

// Consulta para tener la lista de posts
export const postUsuarios = async (id) => {
    // Se hace una coonsulta con un query paramt
    const post = await fetch(`http://localhost:3000/posts?userId=${id}`);
    const data_post = await post.json()
    return data_post; // Retornamos el post
}