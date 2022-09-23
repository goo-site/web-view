import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        alias: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/loginPage.vue')
    },
    {
        path: "/:catchAll(.*)",
        name: 'not_found',
        component: () => import('../views/NotFound.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from) => {
    if (to.meta.requireAuth) {
        return '/login'
    }
})

export default router
