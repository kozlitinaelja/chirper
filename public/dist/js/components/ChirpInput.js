'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by elle on 12/10/15.
 */
var React = require('react');

var ChirpInput = React.createClass({
  displayName: 'ChirpInput',
  handleChange: function handleChange(evt) {
    this.setState({
      value: evt.target.value
    });
  },
  handleClick: function handleClick(evt) {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  },
  getInitialState: function getInitialState() {
    return {
      value: ''
    };
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { className: 'nine columns' },
        React.createElement('input', {
          className: 'u-full-width',
          type: 'text',
          placeholder: 'Say Something!',
          value: this.state.value,
          onChange: this.handleChange })
      ),
      React.createElement(
        'div',
        { className: 'three columns' },
        React.createElement(
          'button',
          { className: 'u-full-width button-primary', onClick: this.handleClick },
          ' Chirp '
        )
      )
    );
  }
});

exports.default = ChirpInput;