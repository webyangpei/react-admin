import React from 'react';
import LayoutInit from './Layout/layout'
import Login from "./views/login";
import View404 from "./views/View404";
import View500 from "./views/View500";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={() => <Redirect to='/index' />} />
        <Route path='/login' component={Login} />
        <Route path='/404' component={View404} />
        <Route path='/500' component={View500} />
        <Route>
          <LayoutInit/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;