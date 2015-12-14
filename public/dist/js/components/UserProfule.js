'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('../stores/users');

var _users2 = _interopRequireDefault(_users);

var _chirps = require('../stores/chirps');

var _chirps2 = _interopRequireDefault(_chirps);

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

var _FollowButton = require('./FollowButton');

var _FollowButton2 = _interopRequireDefault(_FollowButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by elle on 12/14/15.
 */
var React = require('react');

var UserProfile = React.createClass({
  displayName: 'UserProfile',

  mixins: [_users2.default.mixin, _chirps2.default.mixin],
  onChange: function onChange() {
    this.setState(this.getInitialState());
  },
  getInitialState: function getInitialState() {
    //Getting user id from url token
    var userId = parseInt(this.props.params.id, 10);
    return {
      user: _users2.default.get(userId) || {},
      chirps: _chirps2.default.byUserId(userId)
    };
  },
  render: function render() {
    var chirps = this.state.chirps.map(function (chirp) {
      return React.createElement(
        'li',
        { key: chirp.cid },
        chirp.text
      );
    });
    return React.createElement(
      'div',
      null,
      React.createElement('img', { className: 'two columns', src: utils.avatar(this.state.user.email) }),
      React.createElement(
        'div',
        { className: 'ten columns' },
        React.createElement(
          'h1',
          null,
          ' ',
          this.state.user.fullname,
          ' '
        ),
        React.createElement(
          'h3',
          { className: 'timestamp' },
          ' ',
          this.state.user.username,
          ' '
        ),
        React.createElement(
          'p',
          null,
          ' ',
          React.createElement(_FollowButton2.default, { userId: this.state.user.cid })
        ),
        React.createElement(
          'ul',
          null,
          chirps
        )
      )
    );
  }
});

exports.default = UserProfile;