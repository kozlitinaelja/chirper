'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ChirpInput = require('./ChirpInput');

var _ChirpInput2 = _interopRequireDefault(_ChirpInput);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _chirps = require('../stores/chirps');

var _chirps2 = _interopRequireDefault(_chirps);

var _ChirpList = require('./ChirpList');

var _ChirpList2 = _interopRequireDefault(_ChirpList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by elle on 12/10/15.
 */
var React = require('react');

var Home = React.createClass({
  displayName: 'Home',

  mixins: [_chirps2.default.mixin],
  saveChirp: function saveChirp(text) {
    _actions2.default.chirp(text);
  },
  onChange: function onChange() {
    this.setState(this.getInitialState());
  },
  getInitialState: function getInitialState() {
    return {
      chirps: _chirps2.default.timeline()
    };
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(_ChirpInput2.default, { onSave: this.saveChirp }),
      React.createElement(_ChirpList2.default, { chirps: this.state.chirps })
    );
  }
});

exports.default = Home;