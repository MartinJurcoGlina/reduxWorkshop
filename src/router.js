import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {history} from './store.js';
import App from './pages/App';
import LandingPage from './pages/LandingPage';

// build the router
const router = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage}/>

    </Route>
  </Router>
);

// export
export {router};
