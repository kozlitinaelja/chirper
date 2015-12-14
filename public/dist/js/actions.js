'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dispatcher = require('./dispatcher.js');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('./constants.js');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by elle on 12/9/15.
 */

var actions = {};

Object.keys(_constants2.default).forEach(function (key) {
  var funcName = key.split('_').map(function (word, index) {
    if (index == 0) {
      return word.toLowerCase();
    }

    return word[0] + word.slice(1).toLowerCase();
  }).join('');

  actions[funcName] = function (data) {
    _dispatcher2.default.dispatch({
      actionType: _constants2.default[key],
      data: data
    });
  };
});

exports.default = actions;