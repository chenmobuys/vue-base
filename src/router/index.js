import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Member from '@/views/Member'
import Category from '@/views/Category'
import Moment from '@/views/Moment'
import Message from '@/views/Message'

Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
            //component: resolve => require(['@/views/Index'], resolve)
        },
        {
            path: '/category',
            name: 'Category',
            component: Category
        },
        {
            path: '/moment',
            name: 'Moment',
            component: Moment
        },
        {
            path: '/message',
            name: 'Message',
            component: Message
        },
        {
            path: '/member',
            name: 'Member',
            component: Member
        }

    ]
})
