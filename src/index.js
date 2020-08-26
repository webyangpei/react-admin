import { render } from 'react-dom';
import React from 'react';
import App from './App'
// import global scss
import './styles/index.scss';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
moment.locale('zh-cn');

render(<App/>, document.getElementById('root'))
