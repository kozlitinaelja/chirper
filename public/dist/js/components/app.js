'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Navigation = require('./Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by elle on 12/9/15.
 */
var React = require('react');

var App = React.createClass({
  displayName: 'App',

  /*
   *  all nested routes will be in property children
   * */

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'h1',
          null,
          'Chirper'
        )
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'three columns' },
          React.createElement(_Navigation2.default, null)
        ),
        React.createElement(
          'div',
          { className: 'nine columns' },
          this.props.children
        )
      )
    );
  }
});

exports.default = App;