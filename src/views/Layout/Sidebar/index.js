import React from 'react';
import { Menu } from 'antd';
import menu from '../../../route/config'
// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from '@ant-design/icons';
// import {Route, Link} from "react-router-dom";
const { SubMenu } = Menu;
const Sidebar = () => {
  const createMenuChild = (child) => {
    return (
      <Menu.Item key={child.path}>{child.title}</Menu.Item>
    )
  }
  const createMenuLink = (route) => {
    return (
      <SubMenu
        key={route.path}
        title={route.title}
        // icon={route.icon}
      >
        {route.children.map(createMenuChild)}
      </SubMenu>
    )
  }
   return(
     <Menu
       mode="inline"
       defaultSelectedKeys={['1']}
       defaultOpenKeys={['sub1']}
       style={{ height: '100%', borderRight: 0 }}
     >
       {menu.map(createMenuLink)}
     </Menu>
   )
}

export default Sidebar;