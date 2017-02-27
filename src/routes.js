import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
//import SQL from './components/SQL';
//import Customers from './components/Customers';
//import NotFound from './components/NotFound';

/*const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/sql" component={SQL}/>
            <Route path="/customers" components={Customers}/>
            <Route path="*" components={NotFound}/>
        </Route>
    </Router>
);*/

const rootRoute = {
    childRoutes: [ {
        path: '/',
        getIndexRoute(nextState, cb) {
            cb(null, {
                component: Home
            })
        },
        component: App,
        childRoutes: [
            require('./routes/Customers'),
            require('./routes/SQL'),
            {
                path:'*',
                getComponent(nextState, cb) {
                    require.ensure([], (require) => {
                        cb(null, require('./components/NotFound'))
                    })
                }
            }
        ]
    } ]
};
const Routes = (props) => (
    <Router
        {...props}
        routes={rootRoute}
    />
);

export default Routes;