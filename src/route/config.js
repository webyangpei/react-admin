import Dashboard from "../views/dashboard"
import OrderList from "../views/order/order-list"
import goodsList from "../views/goods/goods-list";
const menu = [
  {
    name: 'dashboard',
    path: '/index',
    icon: 'UserOutlined',
    title: '首页',
    component: Dashboard
  },
  {
    name: 'goods',
    path: '/goods',
    icon: 'LaptopOutlined',
    title: '商品',
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
    path: '/order',
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