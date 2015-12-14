'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by elle on 12/8/15.
 */
var flux = require('flux');

var dispatcher = new flux.Dispatcher();

dispatcher.register(function (action) {
  return console.log(action);
});

exports.default = dispatcher;