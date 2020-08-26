import Dashboard from "../views/dashboard"
import OrderList from "../views/order/order-list"
import goodsList from "../views/goods/goods-list";
const menu = [
  {
    name: 'dashboard',
    path: '/',
    icon: 'UserOutlined',
    title: '首页',
    component: Dashboard
  },
  {
    name: 'goods',
    path: '/goods/goods-list',
    icon: 'LaptopOutlined',
    title: '商品',
    component: goodsList,
    children: [
      {
        name: 'goodsList',
        path: '/goods/goods-list',
        icon: 'LaptopOutlined',
        title: '商品列表',
        component: goodsList
      }
    ]
  },
  {
    name: 'order',
    path: '/order/order-list',
    icon: 'UserOutlined',
    title: '订单',
    component: OrderList,
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