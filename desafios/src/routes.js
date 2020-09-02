import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './components/index/index';
import Dia01 from './pages/dia01/index'

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Index}/>
        <Route  path="/dia/1" component={Dia01}/>
    </Switch>
</BrowserRouter>
)

export default Routes;