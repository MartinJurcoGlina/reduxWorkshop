import {createStore, applyMiddleware, compose} from 'redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';

//allows you to write action creators that return a function instead of an action.
// The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met
import thunk from 'redux-thunk';
//Redux middleware that prevents state from being mutated anywhere in the app.
// When mutation occurs, an error will be thrown by the runtime.
// This is useful during development mode to ensure that no part of the app accidentally mutates the state.
import freeze from 'redux-freeze';

//import of all reducers gathered in index.js in reducers folder
import {reducers} from './reducers/index';

// add the middlewares
const middlewares = [];

// add thunk middleware
middlewares.push(thunk);

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);

// export
export {store, history};
