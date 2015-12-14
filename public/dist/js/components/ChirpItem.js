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
var moment = require('moment');

var ChirpItem = React.createClass({
  displayName: 'ChirpItem',
  render: function render() {
    var chirp = this.props.chirp;
    var linkUrl = '/user/' + chirp.userId;
    return React.createElement(
      'li',
      { className: 'row chirp' },
      React.createElement(
        _reactRouter.Link,
        { className: 'two columns', to: linkUrl },
        React.createElement('img', { src: (0, _utils.avatar)(chirp.email), title: chirp.fullname })
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
            chirp.fullname,
            ' '
          ),
          React.createElement(
            'span',
            { className: 'timestamp' },
            '@',
            chirp.username,
            ' ',
            moment(chirp.$created).fromNow()
          )
        ),
        React.createElement(
          'p',
          null,
          ' ',
          chirp.text,
          ' '
        )
      )
    );
  }
});

exports.default = ChirpItem;