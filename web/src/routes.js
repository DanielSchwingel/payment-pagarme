import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Transactions from './pages/Transactions';
import Home from './pages/Home';
import Sell from './pages/Sell';
const Routes = ( ) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/vendas' component={Transactions}/>
                <Route path='/vender' component={Sell}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;