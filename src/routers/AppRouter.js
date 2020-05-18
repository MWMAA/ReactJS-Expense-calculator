import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createhistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import loginPage from '../components/loginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoutes';

export const history = createhistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={loginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
