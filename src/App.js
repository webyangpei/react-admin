import React from 'react';
import LayoutInit from './views/Layout/layout'
import Login from "./views/login";
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';


const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route>
          <LayoutInit/>
        </Route>
        <Route path='/' exact render={() => <Redirect to='/index' />} />
        {/*<Route path='/500' component={500} />*/}
        <Route path='/login' component={Login} />
        {/*<Route path='/404' component={404} />*/}
      </Switch>
    </HashRouter>
  )
}

export default App;