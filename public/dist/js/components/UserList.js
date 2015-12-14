'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('../stores/users');

var _users2 = _interopRequireDefault(_users);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _reactRouter = require('react-router');

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _FollowButton = require('./FollowButton');

var _FollowButton2 = _interopRequireDefault(_FollowButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by elle on 12/11/15.
 */
var React = require('react');

var UserList = React.createClass({
  displayName: 'UserList',

  mixins: [_users2.default.mixin],
  onChange: function onChange() {
    this.setState(this.getInitialState());
  },
  getInitialState: function getInitialState() {
    return {
      users: _users2.default.all(),
      user: _users2.default.currentUser
    };
  },
  render: function render() {
    var _this = this;

    var users = this.state.users.filter(function (user) {
      return _this.state.user.cid !== user.cid;
    });

    var userItems = users.map(function (user) {
      return React.createElement(
        _Box2.default,
        { key: user.cid, user: user },
        React.createElement(_FollowButton2.default, { userId: user.cid })
      );
    });

    return React.createElement(
      'ul',
      null,
      userItems
    );
  }
});

exports.default = UserList;