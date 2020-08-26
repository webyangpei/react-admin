import React, { useState, useEffect } from 'react';
import {Breadcrumb, Layout } from 'antd';
import RouterView from "../../route";
import Sidebar from './Sidebar'
import Logo from './Logo'
const { Header, Sider, Content } = Layout;


const LayoutInit = () => {
  const [ a ] = useState(1);

  useEffect(() => {
    document.title = `You clicked ${a} times`;
  });
  return (
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Logo/>
        <Sidebar/>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ height: 'calc(100vh - 64px)' }}>
          <RouterView/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutInit;