import React from 'react';
import { Route,Switch,HashRouter} from 'react-router-dom';
 import {PrivateRoute} from '../components/authrouter';
import Home from '../routes/homePage';
import Result from '../routes/resultPage';
import NewPage from '../routes/newPage';
import MidPage from '../routes/midloginPage';
import ResultDetail from '../routes/resultDetail'
const Root = () => (
    <HashRouter >
      <Switch>
        <PrivateRoute path="/" exact component={Home}/>
        <PrivateRoute path="/new" exact component={NewPage}/>
        <Route path="/oauth" exact component={MidPage} />
        <PrivateRoute path="/result/:id" exact component={Result}/>
        <PrivateRoute path="/result/user/:userId/detail/:id" exact component={ResultDetail}/>
      </Switch>
      </HashRouter>
);
export default Root;