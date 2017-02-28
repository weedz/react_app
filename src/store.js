import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import rootReducers from './reducers';

const middleware = applyMiddleware(promise(), thunk, logger());

export default function configureStore() {
    const store = createStore(rootReducers, middleware);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducers = require('./reducers').default;
            store.replaceReducer(nextRootReducers);
        });
    }

    return store;
}