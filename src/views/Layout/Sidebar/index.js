import React from 'react';
import { Menu } from 'antd';
import menu from '../../../route/config'
import { Route, Link } from 'react-router-dom';
// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from '@ant-design/icons';
const { SubMenu } = Menu;
const Sidebar = () => {
  const createMenuLink = (route) => {
    if(route.children && route.children.length) {
      return (
        <SubMenu
          key={route.path}
          title={route.title}
          // icon={route.icon}
        >
          {route.children.map((child) => {
            return (
              <Menu.Item key={child.path}>
                <Route>
                  <Link to={child.path}>
                    <span>{child.title}</span>
                  </Link>
                </Route>
            </Menu.Item>)
          })}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={route.path}>
          <Route>
            <Link to={route.path}>
              <span>{route.title}</span>
            </Link>
          </Route>
        </Menu.Item>
      )
    }
  }
   return(
     <Menu
       mode="inline"
       style={{ height: '100%', borderRight: 0 }}
       defaultSelectedKeys={['/']}
       // defaultOpenKeys={['sub1']}
     >
       {menu.map(createMenuLink)}
     </Menu>
   )
}

export default Sidebar;