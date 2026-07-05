import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FingguApp from '../FingguApp';

const FingguRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={FingguApp} />
      </Switch>
    </Router>
  );
};

export default FingguRoutes;