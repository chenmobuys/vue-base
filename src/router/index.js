import Vue from 'vue'
import Router from 'vue-router'
//import Index from '@/views/Index'

Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            //component: Index
            component: resolve => require(['@/views/Index'], resolve) //懒加载、触发isLoading
        }
    ]
})
