import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import DashboardPage from './DashboardPage';
import DashboardPage from './DashboardPage';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/dashboard' component={DashboardPage} />
      </Switch>
    );
  }
}

export default Routes;
