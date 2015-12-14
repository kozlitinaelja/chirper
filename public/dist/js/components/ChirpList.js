'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by elle on 12/10/15.
 */
var React = require('react');
var moment = require('moment');

var ChirpList = React.createClass({
  displayName: 'ChirpList',
  render: function render() {
    var items = this.props.chirps.map(function (chirp) {
      return React.createElement(
        _Box2.default,
        { key: chirp.cid, user: chirp, timestamp: moment(chirp.$created).fromNow() },
        chirp.text
      );
    });

    return React.createElement(
      'ul',
      null,
      items
    );
  }
});

exports.default = ChirpList;