import React from 'react';
const menu = [
    {
        name: 'dashboard',
        path: '/index',
        icon: 'UserOutlined',
        title: '首页',
        hideChildrenInMenu: false,
        hideInMenu: false,
        authority: false, // 用来验证当前路由的权限
        component: React.lazy(() => import('../views/dashboard'))
    },
    {
        name: 'goods',
        path: '/goods',
        redirect: '/goods/goods-list',
        icon: 'LaptopOutlined',
        title: '商品',
        children: [
            {
                name: 'goodsList',
                path: '/goods/goods-list',
                icon: 'LaptopOutlined',
                title: '商品列表',
                component: React.lazy(() => import('../views/goods/goods-list'))
            }
        ]
    },
    {
        name: 'order',
        path: '/order',
        redirect: '/order/order-list',
        icon: 'UserOutlined',
        title: '订单',
        children: [
            {
                name: 'orderList',
                path: '/order/order-list',
                icon: 'LaptopOutlined',
                title: '订单列表',
                component: React.lazy(() => import('../views/order/order-list'))
            }
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: '登录'
    },
    {
        name: '404',
        path: '/404',
        component: '404'
    },
    {
        name: '500',
        path: '/500',
        component: '500'
    }
]

export default menu;