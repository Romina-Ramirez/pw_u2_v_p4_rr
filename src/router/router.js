import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../modules/pokemon/pages/BienvenidaPage.vue')
    },
    {
        path: '/instrucciones',
        component: () => import('../modules/pokemon/pages/JuegoPage.vue')
    },
    {
        path: '/premios',
        component: () => import('../modules/pokemon/pages/PremiosPage.vue')
    },
    {
        path: '/juego',
        component: () => import('../modules/pokemon/pages/PokemonPage.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../modules/pokemon/pages/NoEncontradaPage.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router