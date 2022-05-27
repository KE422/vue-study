import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'

const About = () => {
    return import("../pages/About.vue");
}

const Product = () => {
    return import("../pages/Product.vue");
}

const routes = [
    {
        path: '/',
        redirect: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/product',
        name: 'Product',
        component: Product,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router