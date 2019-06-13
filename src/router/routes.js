import React from 'react';
import { Route,Switch,HashRouter} from 'react-router-dom';
 import {PrivateRoute} from '../components/authrouter';
import Home from '../routes/homePage';
import Result from '../routes/resultPage';
import NewPage from '../routes/newPage';
const Root = () => (
    <HashRouter >
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/new" exact component={NewPage}/>
        <PrivateRoute path="/result/:id" exact component={Result}/>
      </Switch>
      </HashRouter>
);
export default Root;