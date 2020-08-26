import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const EnBreadcrumb = (props) => {
  console.log(props, '这是当前路由么')
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>
        <Link to='/'>首页</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  )
};

export default EnBreadcrumb;