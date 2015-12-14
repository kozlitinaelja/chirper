/**
 * Created by elle on 12/9/15.
 */
import actions from './actions';
import dispatcher from './dispatcher';
import constants from './constants';

let API = {
  fetchChirps() {
    get('/api/chirps').then(json => {
      actions.gotChirps(json);
    })
  },
  fetchUsers() {
    get('/api/users').then(json => {
      actions.gotUsers(json);
    })
  },
  startFetchingChirps(){
    this.fetchChirps();
    return setInterval(this.fetchChirps, 1000)
  },
  startFetchingUsers(){
    this.fetchUsers();
    return setInterval(this.fetchUsers, 5000)
  },
  follow(userId) {
    post('/api/follow/' + userId).then((json => {
      actions.followed(json)
    }))
  },
  unfollow(userId) {
    post('/api/unfollow/' + userId).then((json => {
      actions.unfollowed(json)
    }))
  },
  saveChirp(text) {
    text = text.trim();
    if (text === '') {
      return
    }
    post('/api/chirps', {text: text}).then((json) => {
      actions.chirped(json);
    })
  }
};

function get(url) {
  return fetch(url, {
    credentials: 'same-origin'
  }).then((res) => res.json());
}

function post(url, body = {}) {
  return fetch(url, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((res) => res.json());
}

dispatcher.register(function (action) {
  switch (action.actionType) {
    case constants.CHIRP :
      API.saveChirp(action.data);
      break;
    case constants.FOLLOW :
      API.follow(action.data);
      break;
    case constants.UNFOLLOW :
      API.unfollow(action.data);
      break;
  }
});

export default API