import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: 'home',
            meta: {
                title: 'Home Page',
            },
        },
        {
            path: '/',
            redirect: '/home'
        }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})