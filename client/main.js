import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';

import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import Login from './../imports/ui/Login';

const unathenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const routes = (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/links" component={Link}/>
      <Route path="*" component={NotFound}/>
    </div>
  </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unathenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  if(isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push('/links');
  };
  if(isAuthenticatedPage && !isAuthenticated) {
    browserHistory.push('/');
  };
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
