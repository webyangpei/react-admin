import React from 'react';
import { Switch, Route, Redirect, HashRouter  } from 'react-router-dom';
import menu from './config'

const RouterView = (props) => {
  const createMenu = (route) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        exact
        render={props => (<route.component { ...props}/>)}
      />
    )
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
