// import React from 'react';
import Dashboard from "../views/dashboard";
import GoodsList from "../views/goods/goods-list";
import OrderList from "../views/order/order-list";
const menu = [
    {
        name: 'dashboard',
        path: '/index',
        icon: 'UserOutlined',
        title: '首页',
        hideChildrenInMenu: false,
        hideInMenu: false,
        authority: false, // 用来验证当前路由的权限
        component: Dashboard
        // component: React.lazy(() => import('../views/dashboard'))
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
                component: GoodsList
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
                component: OrderList
            }
        ]
    }
]

export default menu;