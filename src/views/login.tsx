import React, {useState} from 'react';
import {Form, Input, Button} from 'antd';
import './login.scss';
import * as API_Login from '../api/login';
import {Redirect} from "react-router-dom";

const Login = () => {
    const [form] = Form.useForm();
    const [formLayout]: any = useState('vertical');
    const [formLogin, setformLogin]: any = useState({
        username: '',
        password: ''
    });

    const [isLogin, setisLogin] = useState(false);

    // 表单内容发生变化
    const handleChange = (changedValues: any, allValues: any): void => {
        setformLogin(allValues);
    };


    // 执行登录
    const handleLogin = (): void => {
        API_Login.goLogin(formLogin).then((res: any) => {
            console.log(res, 2323)
            setisLogin(true)
        })
    }

    return (
        isLogin ? <Redirect to='/index'/> :
            <div className="container">
                <div className="main-content">
                    <p>开始体验吧！请创建您的账户。</p>
                    <Form
                        name="login"
                        layout={formLayout}
                        form={form}
                        size="large"
                        onValuesChange={handleChange}>
                        <Form.Item label="用户名" name="username" labelAlign="left"
                                   rules={[{required: true, whitespace: true, message: '请输入用户名!'}]}>
                            <Input placeholder="请输入您的用户名" allowClear value={formLogin.username}/>
                        </Form.Item>
                        <Form.Item label="密码" name="password"
                                   rules={[{required: true, whitespace: true, message: '请输入密码!'}]}>
                            <Input.Password placeholder="请输入密码" allowClear value={formLogin.password}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={handleLogin}>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
    )
}

export default Login;