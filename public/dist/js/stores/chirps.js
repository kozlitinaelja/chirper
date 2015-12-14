'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChirpStore = (0, _store2.default)({
  init: function init() {
    this.bind(_constants2.default.GOT_CHIRPS, this.set);
    this.bind(_constants2.default.CHIRPED, this.add);
  },
  timeline: function timeline() {
    var _UserStore$currentUse = _users2.default.currentUser;
    var cid = _UserStore$currentUse.cid;
    var following = _UserStore$currentUse.following;

    var ids = [cid].concat(following);
    return this._data.filter(function (chirp) {
      return ids.indexOf(chirp.userId) > -1;
    });
  },
  byUserId: function byUserId(id) {
    return this._data.filter(function (chirp) {
      return chirp.userId === id;
    });
  }
}); /**
     * Created by elle on 12/9/15.
     */

exports.default = ChirpStore;