import React from 'react';
import { Menu } from 'antd';
import menu from '../../route/config'
import { NavLink } from 'react-router-dom';
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
                <NavLink to={child.path}>
                  <span>{child.title}</span>
                </NavLink>
            </Menu.Item>)
          })}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={route.path}>
          <NavLink to={route.path}>
            <span>{route.title}</span>
          </NavLink>
        </Menu.Item>
      )
    }
  }
   return(
     <Menu
       mode="inline"
       style={{ height: 'calc(100% - 64px)', borderRight: 0 }}
       defaultSelectedKeys={['/']}
     >
       {menu.map(createMenuLink)}
     </Menu>
   )
}

export default Sidebar;