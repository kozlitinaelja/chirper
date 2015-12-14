'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _users = require('../stores/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by elle on 12/11/15.
 */
var React = require('react');

var FollowButton = React.createClass({
  displayName: 'FollowButton',

  mixins: [_users2.default.mixin],
  follow: function follow(evt) {
    _actions2.default.follow(this.props.userId);
  },
  unfollow: function unfollow(evt) {
    _actions2.default.unfollow(this.props.userId);
  },
  onChange: function onChange() {
    this.setState(this.getInitialState());
  },
  getInitialState: function getInitialState() {
    return {
      id: _users2.default.currentUser.cid,
      currentFollowing: _users2.default.currentUser.following
    };
  },
  render: function render() {
    var userId = this.props.userId;

    if (this.state.id === userId) {
      return React.createElement(
        'span',
        null,
        'This is you!'
      );
    }

    var text = undefined,
        action = undefined;

    if (this.state.currentFollowing.indexOf(userId) === -1) {
      text = 'Follow';
      action = this.follow;
    } else {
      text = 'Unfollow';
      action = this.unfollow;
    }

    return React.createElement(
      'button',
      { onClick: action },
      ' ',
      text,
      ' '
    );
  }
});

exports.default = FollowButton;