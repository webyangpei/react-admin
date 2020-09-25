import React, {Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Spin, Space} from 'antd';
import menu from './config'

const RouterView = () => {
    const Loading = () => {
        return (
            <Space size="middle">
                <Spin size="large"/>
            </Space>
        )
    }
    const createMenu = (route: any) => {
        if (route && route.children && route.children.length) {
            return route.children.map(createMenu)
        } else {
            return (
                <Route
                    exact
                    key={route.path}
                    path={route.path}
                    render={props => {
                        return (route && (route.redirect
                                ? (<Redirect to={route.redirect}/>)
                                :
                                <Suspense fallback={Loading}>
                                    <route.component {...props} routes={route}/>
                                </Suspense>
                        ))
                    }}
                />
            )
        }
    }
    return (
        <Switch>
            {menu.map(createMenu)}
        </Switch>
    )
}

export default RouterView;
