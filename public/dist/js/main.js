'use strict';

var _reactRouter = require('react-router');

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _UserList = require('./components/UserList');

var _UserList2 = _interopRequireDefault(_UserList);

var _UserProfule = require('./components/UserProfule');

var _UserProfule2 = _interopRequireDefault(_UserProfule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by elle on 12/8/15.
 */
var React = require('react');
var ReactDOM = require('react-dom');

// using an ES6 transpiler, like babel

_api2.default.startFetchingChirps();
_api2.default.startFetchingUsers();

ReactDOM.render(React.createElement(
  _reactRouter.Router,
  { history: (0, _createBrowserHistory2.default)({ queryKey: false }) },
  React.createElement(
    _reactRouter.Route,
    { path: '/', component: _app2.default },
    React.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
    React.createElement(_reactRouter.Route, { path: 'users', component: _UserList2.default }),
    React.createElement(_reactRouter.Route, { path: 'user/:id', component: _UserProfule2.default })
  )
), document.getElementById('app'));