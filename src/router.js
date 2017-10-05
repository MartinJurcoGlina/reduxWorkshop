import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {history} from './store.js';
import App from './pages/App';
import LandingPage from './pages/LandingPage';
import BossPage from './pages/BossPage';

// build the router
const router = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage}/>
      <Route path="boss" component={BossPage}/>
    </Route>
  </Router>
);

// export
export {router};
