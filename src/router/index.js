import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'

const Video = () => import("../pages/Video.vue");
const About = () => import("../pages/About.vue");
const Product = () => import("../pages/Product.vue");
const Detail = () => import("../components/product/Detail.vue");
const Login = () => import("../components/home/Login.vue");
const Welcome = () => import("../components/home/HelloUser.vue");

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [{
            path: 'login',
            name: 'Login',
            component: Login,
        }, {
            path: 'welcome',
            name: 'Welcome',
            component: Welcome,
        }]
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
        props: { post: false },
    },
    {
        path: '/video',
        name: 'Video',
        component: Video,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router