import Dashboard from "../views/dashboard"
import Login from "../views/login"
const menu = [
  {
    name: 'dashboard',
    path: '/',
    icon: 'UserOutlined',
    title: '首页',
    component: Dashboard,
    children: []
  },
  {
    name: 'login',
    path: '/login',
    icon: 'LaptopOutlined',
    title: '登录',
    component: Login,
    children: []
  }
]

export default menu;