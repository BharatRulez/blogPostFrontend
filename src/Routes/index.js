import React from 'react';
import { Route,Switch } from 'react-router-dom';

import HomePage from '../components/layout/homepage'
import Login from '../components/Login/index'
import SignUp from '../components/SignUp/index'
import Posts from '../components/Dashboard/post/posts'
const Routes = () => (
  <Switch >
    <Route exact path="/" component = {HomePage} />
    <Route exact path="/login" component = {Login} />
    <Route exact path="/signUp" component = {SignUp} />
    <Route exact path="/posts" component = {Posts} />
   </Switch>
);

export default Routes;