import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import RouterView from "../route";
import Sidebar from './Sidebar'
import EnBreadcrumb from '../components/EnBreadcrumb';
import Logo from './Logo'
import menu from '../route/config'
const { Header, Sider, Content } = Layout;


const LayoutInit = () => {
  const [ menuData, setMenuData ] = useState([]);

  useEffect(() => {
     fetch('/api/menu')
       .then(response => response.json())
       .then(response => {
         setMenuData(response.data || []);
       })
  },[]);
  return (
    <Layout>
      <Sider width={200} collapsible className="site-layout-background">
        <Logo />
        <Sidebar/>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff' }}>
          <EnBreadcrumb menu={menu}/>
        </Header>
        <Content style={{ height: 'calc(100vh - 64px)' }}>
          <RouterView menuData={menuData}/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutInit;