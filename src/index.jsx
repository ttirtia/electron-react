import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';

ReactDOM.render(
  <HashRouter>
    <div className="container is-fluid">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Home} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('app')
);
