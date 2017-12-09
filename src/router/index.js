import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: resolve => require(['@/views/Index'], resolve),
            children: [

            ]
        },
        {
            path: '/:id',
            name: 'Profile',
            component: resolve => require(['@/views/Profile'], resolve)
        }

    ]
})
