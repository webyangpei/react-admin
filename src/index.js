import { render } from 'react-dom';
import React from 'react';
import { Layout } from 'antd';
import RouterView from "./route";
// import global scss
import './styles/index.scss';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
const { Header, Sider, Content } = Layout;


moment.locale('zh-cn');

const App = () => {
  return (
    <Layout>
      <Sider>Sider1</Sider>
      <Layout>
        <Header>Header</Header>
        <Content style={{ height: 'calc(100vh - 64px)' }}>
          <RouterView/>
        </Content>
      </Layout>
    </Layout>
  )
}

render(<App/>, document.getElementById('root'))
