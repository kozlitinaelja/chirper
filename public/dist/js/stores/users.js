'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by elle on 12/10/15.
 */

var UserStore = (0, _store2.default)({
  init: function init() {
    this.bind(_constants2.default.GOT_USERS, this.set);
    this.bind(_constants2.default.FOLLOWED, this.updateUser);
    this.bind(_constants2.default.UNFOLLOWED, this.updateUser);
  },

  currentUser: USER,

  updateUser: function updateUser(data) {
    this.currentUser = data;
  }
});

exports.default = UserStore;