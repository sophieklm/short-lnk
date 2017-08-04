import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';

import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';

const routes = (
  <BrowserRouter history={browserHistory}>
    <div>
      <Route path="/signup" component={Signup}/>
      <Route path="/link" component={Link}/>
    </div>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
