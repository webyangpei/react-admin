import React from 'react';
import { Switch, Route, Redirect, BrowserRouter  } from 'react-router-dom';
import menu from './config'

const RouterView = (props) => {
  const createMenu = (route) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        exact
        component={route.component}
      >
      </Route>
    )
  }
  return (
    <BrowserRouter>
      <Switch>
        {menu.map(createMenu)}
        <Route render={() => <Redirect to='/404'></Redirect> }></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default RouterView;
