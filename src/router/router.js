// Aqui se configura el router y las rutas de la aplicación
// Se deben usar dos funcionalidades de la libreria de router
import { createRouter, createWebHashHistory } from 'vue-router' // Es un objeto que tiene atributos y metodos, pero usamos solo 2

// Importación de las páginas

//Definicion de las rutas en un arreglo
const routes = [
    {
        path: "/", // Se escribe el valor de la ruta
        components: () => import('../modules/pokemon/pages/BienvenidaPage') // Se escribe la página
    },
    {
        path: "/juego", // Se escribe el valor de la ruta
        components: () => import('../modules/pokemon/pages/JuegoPage') // Se escribe la página
    },
    {
        path: "/premios", // Se escribe el valor de la ruta
        components: () => import('../modules/pokemon/pages/PremiosPage') // Se escribe la página
    },
    {
        path: "/pokemon",
        components: () => import('../modules/pokemon/pages/PokemonPage')
    },
    {
        path: "/pathmatch(.*)*",
        components: () => import('../modules/pokemon/pages/NoEncontradaPage')
    },
]

// El metodo createRouter recibe un objeto, por tanto hay que enviarle entre llaves
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//Se debe exportar el router
export default router