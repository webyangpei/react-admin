const menu = [
    {
        name: 'dashboard',
        path: '/index',
        icon: 'UserOutlined',
        title: '首页',
        hideChildrenInMenu: false,
        hideInMenu: false,
        authority: false, // 用来验证当前路由的权限
        component: require('../views/dashboard').default
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
                component: require('../views/goods/goods-list').default
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
                component: require('../views/order/order-list').default
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