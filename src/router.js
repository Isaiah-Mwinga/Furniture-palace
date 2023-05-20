import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import Products from './views/Products';


const Routes = () => {
    return (
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/products' component={Products} />
    
        </Switch>
    );
    }

export default Routes;
