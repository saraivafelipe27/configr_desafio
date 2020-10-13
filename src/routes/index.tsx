import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import IssuesC from '../pages/IssuesClosed';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/issuesclosed" exact component={IssuesC} />

  </Switch>
)

export default Routes;
