import React from 'react';
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';

const EnBreadcrumb = (props) => {
  // console.log( '这是当前路由么')
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>
        <NavLink to='/'>首页</NavLink>
      </Breadcrumb.Item>
      {/*props.menu.*/}
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  )
};

export default EnBreadcrumb;