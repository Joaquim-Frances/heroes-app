import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { LoginView } from '../components/login/LoginView';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    return (
        <Router>
      <div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route exact path='/login' component={LoginView} />
            <Route  path='/' component={ DashboardRoutes} />
        </Switch>
      </div>
    </Router>
    )
}
