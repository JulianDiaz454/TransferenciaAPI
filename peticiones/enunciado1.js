import { getUsers, getPosts } from "./modules/consultas.js";

const EstadisticasGET = async () => {
    // Se asignan los retornos de las funcionas a distintas contantes
    const usuarios = await getUsers();
    const publicaciones = await getPosts();

    // Con la función map obtenermos un nuevo arregloo con cambios
    const lista_stats = usuarios.map(usuario => {
        // Filtramos las publicaciones del usuario actual
        const susPublicaciones = publicaciones.filter(
            post => Number(post.userId) === Number(usuario.id)
        );

        // Retornamos directamente el objeto que queremos en la nueva lista
        return {
            nombre: usuario.name,
            publicaciones: susPublicaciones.length
        };
    });

    console.log(lista_stats); 
}

EstadisticasGET();