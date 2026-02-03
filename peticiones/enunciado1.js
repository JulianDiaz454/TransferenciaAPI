const EstadisticasGET = async () => {
    // Se hace la petición para consultar la lista de usuarios
    const users = await fetch('http://localhost:3000/users');
    const usuarios = await users.json();

    // Se hace la petición para consultar la lista de posts
    const posts = await fetch('http://localhost:3000/posts');
    const publicaciones = await posts.json();

    const lista_stats = [];

    // Usamos un bucle para recorrer cada usuario
    for (const usuario of usuarios) {
        // Filtramos los post que coincidan con el ID de el usuario
        const susPublicaciones = publicaciones.filter(post => Number(post.userId) === Number(usuario.id));
        const cantidad = susPublicaciones.length;

        // Creamos el objeto con el formato solicitado
        const resultadoUsuario = {
            nombre: usuario.name,
            publicaciones: cantidad
        };

        // Guardamos el objeto en la lista
        lista_stats.push(resultadoUsuario);
    }

    console.log(lista_stats);
}

EstadisticasGET();