import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from './components/App';
import SQL from './components/SQL';
import Home from './components/Home';
import Customers from './components/Customers';
//import NotFound from './components/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/sql" component={SQL}/>
            <Route path="/customers" components={Customers}/>
        </Route>
    </Router>
);

export default Routes;