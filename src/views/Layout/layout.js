import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import RouterView from "../../route";
import Sidebar from './Sidebar'
import EnBreadcrumb from '../../components/EnBreadcrumb'
import Logo from './Logo'
import menu from '../../route/config'
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
          <EnBreadcrumb />
        </Header>
        <Content style={{ height: 'calc(100vh - 64px)' }}>
          <RouterView/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutInit;