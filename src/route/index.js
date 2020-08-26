import React from 'react';
import { Switch, Route, Redirect, HashRouter  } from 'react-router-dom';
import menu from './config'

const RouterView = (props) => {
  const createMenu = (route) => {
    if(route && route.children && route.children.length) {
      return route.children.map(createMenu)
    } else {
      return (
        <Route
          key={route.path}
          path={route.path}
          exact
          render={props => (<route.component { ...props}/>)}
        />
      )
    }

  }
  return (
    <HashRouter>
      <Switch>
        {menu.map(createMenu)}
        <Route render={() => <Redirect to='/404'/> }/>
      </Switch>
    </HashRouter>
  )
}

export default RouterView;
