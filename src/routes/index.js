import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AppContainer from '../components/AppContainer';
import Home from '../components/Home';
import Customers from './Customers';
import SQL from './SQL';

const Routes = () => (
    <BrowserRouter>
	    <AppContainer>
		    <Route exact path="/" component={Home}/>
		    <Route path="/customers" component={Customers}/>
		    <Route path="/sql" component={SQL}/>
	    </AppContainer>
    </BrowserRouter>
)

export default Routes;