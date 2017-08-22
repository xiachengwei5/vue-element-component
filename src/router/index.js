/**
 * Created by Administrator on 2017/8/11.
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        redirect: '/login'          //访问根路径时重定向到登录界面
    },{
        path: '/readme',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        children: [
            {
                path: '/',
                component: resolve => require(['../components/pages/Readme.vue'], resolve)
            }, {
                path: '/basetable',
                component: resolve => require(['../components/pages/BaseTable.vue'], resolve)
            }, {
                path: '/vuetable',
                component: resolve => require(['../components/pages/VueTable.vue'], resolve)
            }, {
                path: '/dynamictable',
                component: resolve => require(['../views/table/dynamictable.vue'], resolve)
            }, {
                path: '/baseform',
                component: resolve => require(['../components/pages/BaseForm.vue'], resolve)
            }, {
                path: '/vueeditor',
                component: resolve => require(['../components/pages/VueEditor.vue'],resolve)
            }, {
                path: '/markdown',
                component: resolve => require(['../components/pages/Markdown.vue'], resolve)
            }, {
                path: '/upload',
                component: resolve => require(['../components/pages/upload.vue'], resolve)
            }, {
                path: '/basecharts',
                component: resolve => require(['../components/pages/BaseCharts.vue'], resolve)
            }, {
                path: '/drag',
                component: resolve => require(['../components/pages/DragList.vue'], resolve)
            }, {
                path: '/echarsline',
                component: resolve => require(['../views/charts/line.vue'], resolve)
            }, {
                path: '/backToTop',
                component: resolve => require(['../views/components/backToTop.vue'], resolve)
            }, {
                path: '/wave',
                component: resolve => require(['../views/components/mixin.vue'], resolve)
            }
        ]
    },{
        path: '/login',
        component: resolve => require(['../components/pages/login.vue'], resolve)
    }]
})

