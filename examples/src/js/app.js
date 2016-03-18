import React from 'react';
import ReactDOM from 'react-dom';

import { hashHistory, IndexRoute, Router, Route } from 'react-router';

import App from './components/App';
import Home from './components/Home';

const routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
