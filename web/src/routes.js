import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Transactions from './pages/Transactions';
import Home from './pages/Home';
import Sell from './pages/Sell';
import Customers from './pages/Customers';

const Routes = ( ) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/vendas' component={Transactions}/>
                <Route path='/vender' component={Sell}/>
                <Route path='/clientes' component={Customers}/>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;