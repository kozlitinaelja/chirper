/**
 * Created by elle on 12/8/15.
 */
let React = require('react');
let ReactDOM = require('react-dom');

// using an ES6 transpiler, like babel
import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import API from './api';
import Home from './components/Home';
import App from './components/app';
import UserList from './components/UserList';
import UserProfile from './components/UserProfule';

API.startFetchingChirps();
API.startFetchingUsers();

ReactDOM.render((
  <Router history={createBrowserHistory({queryKey: false})}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="users" component={UserList} />
      <Route path="user/:id" component={UserProfile} />
    </Route>
  </Router>
), document.getElementById('app'));