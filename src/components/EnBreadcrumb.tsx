import React from 'react';
import {Breadcrumb } from 'antd';
import { withRouter } from 'react-router-dom';
// import { connect } from 'redux';

const filterBreadcrumb = (menu:any, path:any) => {
  const _route = []
  for (let key of menu) {
    if(key.path === path) {
      _route.push(key)
    } else if(key.children && key.children.length && key.path !== path){
      key.children = filterBreadcrumb(key.children, path);
      if(key.children && key.children.length) {
        _route.push(key)
      }
    }
  }
  return _route
}

const EnBreadcrumb = (props:any) => {
  const { menu, location } = props;
  const _menu = JSON.parse(JSON.stringify(menu));
  let stack = filterBreadcrumb(_menu, location.pathname);
  let parallel = []
  let item
  while (stack.length) {
    item = stack.shift()
    parallel.push(item)
    if (item.children && item.children.length) {
      stack = item.children.concat(stack)
    }
  }

  const createBreadLink = (route:any) => {
    return (
      <Breadcrumb.Item key={route.path} href={route.redirect ? route.redirect : route.path}>{route.title}</Breadcrumb.Item>
    )
  }

  return (
    parallel[0].path === '/index' ?
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item href='/index'>首页</Breadcrumb.Item>
    </Breadcrumb> :
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item href='/index'>首页</Breadcrumb.Item>
      {parallel.map(createBreadLink)}
    </Breadcrumb>
  )
};

export default withRouter(EnBreadcrumb);