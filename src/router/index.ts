import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/security',
        name: 'security',
        component: () => import('@/views/security.vue')
    },
]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL), // history
    history: createWebHashHistory(), // hash
    routes
})

export default router
