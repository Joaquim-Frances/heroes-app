import React, { useContext } from 'react'
import {
    HashRouter as Router,
    Switch,
  } from "react-router-dom";
import { AuthContext } from '../components/auth/AuthContext';
import { LoginView } from '../components/login/LoginView';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {

  const {user} = useContext(AuthContext);

    return (
        <Router>
      <div>
        <Switch>
            <PublicRoute exact path='heroes-app/login' component={LoginView} isAuthenticated={user.logged} />
            <PrivateRoute path='heroes-app/' component={ DashboardRoutes} isAuthenticated={user.logged} />
        </Switch>
      </div>
    </Router>
    )
}
