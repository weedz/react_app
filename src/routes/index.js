// Simple routes
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

// Asynchronous routes
import AppContainer from '../components/AppContainer';
import Home from '../components/Home';
const rootRoute = {
    childRoutes: [ {
        path: '/',
        getIndexRoute(nextState, cb) {
            cb(null, {
                component: Home
            })
        },
        component: AppContainer,
        childRoutes: [
            require('../routes/Customers'),
            require('../routes/SQL'),
            {
                path:'*',
                getComponent(nextState, cb) {
                    require.ensure([], (require) => {
                        cb(null, require('../components/NotFound'))
                    })
                }
            }
        ]
    } ]
};

export default rootRoute;