import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';


const Routes = () => {
    return (
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
    
        </Switch>
    );
    }

export default Routes;
