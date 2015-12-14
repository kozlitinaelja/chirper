'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = require('react-router');

var _users = require('../stores/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by elle on 12/11/15.
 */
var React = require('react');

var Navigation = React.createClass({
  displayName: 'Navigation',
  getInitialState: function getInitialState() {
    return {
      username: _users2.default.currentUser.username
    };
  },
  render: function render() {
    return React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        ' ',
        React.createElement(
          _reactRouter.Link,
          { to: '/' },
          ' Timeline '
        ),
        ' '
      ),
      React.createElement(
        'li',
        null,
        ' ',
        React.createElement(
          _reactRouter.Link,
          { to: 'users' },
          ' Users '
        ),
        ' '
      ),
      React.createElement(
        'li',
        null,
        ' ',
        React.createElement(
          'a',
          { href: '/logout' },
          ' Logout '
        ),
        ' (',
        this.state.username,
        ')'
      )
    );
  }
});

exports.default = Navigation;