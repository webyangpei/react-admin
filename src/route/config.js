import Dashboard from "../views/dashboard"
import Login from "../views/login"
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
  }
]

export default menu;