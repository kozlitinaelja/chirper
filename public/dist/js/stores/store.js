'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dispatcher = require('../dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assign = require('object-assign'); /**
                                        * Created by elle on 12/9/15.
                                        */

var EventEmitterProto = require('events').EventEmitter.prototype;
var CHANGE_EVENT = 'CHANGE';

var storeMethods = {
  init: function init() {},
  set: function set(arr) {
    var currIds = this._data.map(function (m) {
      return m.cid;
    });
    arr.filter(function (item) {
      return currIds.indexOf(item.cid) === -1;
    }).forEach(this.add, this);

    this.sort();
  },
  add: function add(item) {
    this._data.push(item);
    this.sort();
  },
  all: function all() {
    return this._data;
  },
  sort: function sort() {
    this._data.sort(function (a, b) {
      var aTimestamp = new Date(a.$created).getTime();
      var bTimestamp = new Date(b.$created).getTime();
      return bTimestamp - aTimestamp;
    });
  },
  get: function get(id) {
    return this._data.filter(function (item) {
      return item.cid === id;
    })[0];
  },
  addChangeListener: function addChangeListener(fn) {
    this.on(CHANGE_EVENT, fn);
  },
  removeChangeListener: function removeChangeListener(fn) {
    this.removeListener(CHANGE_EVENT, fn);
  },
  emitChange: function emitChange() {
    this.emit(CHANGE_EVENT);
  },
  bind: function bind(actionType, actionFn) {
    if (this.actions[actionType]) {
      this.actions[actionType].push(actionFn);
    } else {
      this.actions[actionType] = [actionFn];
    }
  }
};

var extend = function extend(methods) {
  var store = {
    _data: [],
    actions: {},
    mixin: {
      componentDidMount: function componentDidMount() {
        store.addChangeListener(this.onChange);
      },
      componentWillUnmount: function componentWillUnmount() {
        store.removeChangeListener(this.onChange);
      }
    }
  };
  assign(store, EventEmitterProto, storeMethods, methods);
  store.init();

  _dispatcher2.default.register(function (action) {
    var allActions = store.actions[action.actionType];
    if (allActions) {
      allActions.forEach(function (fn) {
        fn.call(store, action.data);
        store.emitChange();
      });
    }
  });

  return store;
};

exports.default = extend;