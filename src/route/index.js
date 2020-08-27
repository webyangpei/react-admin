import React from 'react';
import { Switch, Route, Redirect  } from 'react-router-dom';
import menu from './config'

const RouterView = (props) => {
  const createMenu = (route) => {
    if(route && route.children && route.children.length) {
      return route.children.map(createMenu)
    } else {
      return (
        <Route
          exact
          key={route.path}
          path={route.path}
          render={props => (<route.component { ...props}/>)}
        />
      )
    }
  }
  return (
    <Switch>
      {menu.map(createMenu)}
      <Route render={() => <Redirect to='/404'/> }/>
    </Switch>
  )
}

export default RouterView;
