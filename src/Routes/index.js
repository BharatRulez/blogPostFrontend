import React from 'react';
import { Route,Switch } from 'react-router-dom';

import HomePage from '../components/layout/homepage'
import Login from '../components/Login/index'
import SignUp from '../components/SignUp/index'

const Routes = () => (
  <Switch >
    <Route exact path="/" component = {HomePage} />
    <Route exact path="/login" component = {Login} />
    <Route exact path="/signUp" component = {SignUp} />
   </Switch>
);

export default Routes;