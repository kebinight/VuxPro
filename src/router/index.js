import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: resolve => require(['../components/page/Home.vue'], resolve)
        },
    ]
});

router.beforeEach((to, from, next) => {
    console.log(to.path);
    next();
});

export default router;
