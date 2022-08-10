import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const route = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/get",
            component: () => import('./components/Get'),
            name: "get.index"
        },
        {
            path: "/cabinet",
            component: () => import('./components/Cabinet'),
            name: "cabinet.index"
        },
        {
            path: "/login",
            component: () => import('./components/Login'),
            name: "user.login"
        },
        {
            path: "/registration",
            component: () => import('./components/Registration'),
            name: "user.registration"
        },
        {
            path: "/:catchAll(.*)",//или просто *
            component: () => import('./components/page404'),
            name: "page404"
        }
    ]
});

route.beforeEach( (to, from, next) => {
    //в общем понятно, тут мы можем тестировать роуты, останавливать и смотреть откуда куда идем

    const accessToken = localStorage.getItem('token');
    //по хорошему надо проверить этот токен, иначе там 123 напишем и он будет работать

    if(to.name !== "user.login" && to.name !== "user.registration") {
        if (!accessToken) {
            return next({
                name: "user.login"
            });
        }
    } else {
        if(accessToken ) {
            return next({
                name: "cabinet.index"
            });
        }
    }


    next()
});

export default route

