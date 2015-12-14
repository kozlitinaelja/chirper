'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _dispatcher = require('./dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API = {
  fetchChirps: function fetchChirps() {
    get('/api/chirps').then(function (json) {
      _actions2.default.gotChirps(json);
    });
  },
  fetchUsers: function fetchUsers() {
    get('/api/users').then(function (json) {
      _actions2.default.gotUsers(json);
    });
  },
  startFetchingChirps: function startFetchingChirps() {
    this.fetchChirps();
    return setInterval(this.fetchChirps, 1000);
  },
  startFetchingUsers: function startFetchingUsers() {
    this.fetchUsers();
    return setInterval(this.fetchUsers, 5000);
  },
  follow: function follow(userId) {
    post('/api/follow/' + userId).then(function (json) {
      _actions2.default.followed(json);
    });
  },
  unfollow: function unfollow(userId) {
    post('/api/unfollow/' + userId).then(function (json) {
      _actions2.default.unfollowed(json);
    });
  },
  saveChirp: function saveChirp(text) {
    text = text.trim();
    if (text === '') {
      return;
    }
    post('/api/chirps', { text: text }).then(function (json) {
      _actions2.default.chirped(json);
    });
  }
}; /**
    * Created by elle on 12/9/15.
    */

function get(url) {
  return fetch(url, {
    credentials: 'same-origin'
  }).then(function (res) {
    return res.json();
  });
}

function post(url) {
  var body = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return fetch(url, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  });
}

_dispatcher2.default.register(function (action) {
  switch (action.actionType) {
    case _constants2.default.CHIRP:
      API.saveChirp(action.data);
      break;
    case _constants2.default.FOLLOW:
      API.follow(action.data);
      break;
    case _constants2.default.UNFOLLOW:
      API.unfollow(action.data);
      break;
  }
});

exports.default = API;