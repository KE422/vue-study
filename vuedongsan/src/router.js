import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'

Vue.use(VueRouter)

const About = () => {
    return import("./pages/About.vue");
}

const Product = () => {
    return import("./pages/Product.vue");
}

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/product',
            name: 'product',
            component: Product,
        }
    ]
})