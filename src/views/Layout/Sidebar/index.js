import React from 'react';
import { Menu } from 'antd';
import menu from '../../../route/config'
import { Link } from 'react-router-dom';
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
                <Link to={child.path}>
                  <span>{child.title}</span>
                </Link>
            </Menu.Item>)
          })}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={route.path}>
          <Link to={route.path}>
            <span>{route.title}</span>
          </Link>
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