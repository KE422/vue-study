import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'

const About = () => import("../pages/About.vue");

const Product = () => import("../pages/Product.vue");

const Detail = () => import("../components/product/Detail.vue");

const routes = [
    {
        path: '/',
        redirect: '/home',
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
    },
    {
        path: '/product/:id',
        name: 'Product-Detail',
        component: Detail,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router