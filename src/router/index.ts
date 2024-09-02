import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
    },
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
router.beforeEach(() => {

})

export default router
