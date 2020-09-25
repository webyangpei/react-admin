import React, {useState, useEffect} from 'react';
import {Layout} from 'antd';
import RouterView from "../route";
import Sidebar from './Sidebar'
import EnBreadcrumb from '../components/EnBreadcrumb';
import Logo from './Logo'
import { withRouter } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import menu from '../route/config'

const {Header, Sider, Content} = Layout;


const LayoutInit = (props: any) => {
    const [authorization] = useState(false);
    // 简单的路由导航守卫
    useEffect(() => {
        NProgress.start()
        let { history: { replace }, location } = props
        if (authorization) {
            replace('/login');
            NProgress.done();
        }
        if (location.pathname === '/') {
            replace('/index');
            NProgress.done();
        }
        console.log(props.location.pathname, 555555);
        NProgress.done();
    }, [props, authorization])

    return (
        <Layout>
            <Sider width={200} collapsible className="site-layout-background">
                <Logo/>
                <Sidebar/>
            </Sider>
            <Layout>
                <Header style={{background: '#fff'}}>
                    <EnBreadcrumb menu={menu}/>
                </Header>
                <Content style={{height: 'calc(100vh - 64px)'}}>
                    <RouterView/>
                </Content>
            </Layout>
        </Layout>
    )
}

export default withRouter(LayoutInit);
