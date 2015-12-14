'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = require('react-router');

var _utils = require('../utils');

/**
 * Created by elle on 12/10/15.
 */
var React = require('react');

var Box = React.createClass({
  displayName: 'Box',
  render: function render() {
    var _props = this.props;
    var user = _props.user;
    var _props$timestamp = _props.timestamp;
    var timestamp = _props$timestamp === undefined ? '' : _props$timestamp;

    var linkUrl = '/user/' + (typeof user.userId === 'number' ? user.userId : user.cid);

    timestamp = timestamp ? String.fromCharCode(8226) + ' ' + timestamp : '';

    return React.createElement(
      'li',
      { className: 'row chirp' },
      React.createElement(
        _reactRouter.Link,
        { className: 'two columns', to: linkUrl },
        React.createElement('img', { src: (0, _utils.avatar)(user.email), title: user.fullname })
      ),
      React.createElement(
        'div',
        { className: 'ten columns' },
        React.createElement(
          'p',
          null,
          React.createElement(
            'strong',
            null,
            ' ',
            user.fullname,
            ' '
          ),
          React.createElement(
            'span',
            { className: 'timestamp' },
            '@',
            user.username,
            ' ',
            timestamp
          )
        ),
        React.createElement(
          'p',
          null,
          ' ',
          this.props.children,
          ' '
        )
      )
    );
  }
});

exports.default = Box;