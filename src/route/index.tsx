import React from 'react';
import { Switch, Route, Redirect  } from 'react-router-dom';
import menu from './config'

const RouterView = (props:any) => {
  const createMenu = (route:any) => {
    if(route && route.children && route.children.length) {
      return route.children.map(createMenu)
    } else {
      return (
        <Route
          exact
          key={route.path}
          path={route.path}
          render={props => {
            return( route &&( route.redirect ? (<Redirect to={route.redirect}/>) : <route.component { ...props} routes={route} />))
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
