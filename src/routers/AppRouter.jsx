import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    // Route,
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
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <PublicRoute exact path='/login' component={LoginView} isAuthenticated={user.logged} />
            <PrivateRoute path='/' component={ DashboardRoutes} isAuthenticated={user.logged} />
        </Switch>
      </div>
    </Router>
    )
}
