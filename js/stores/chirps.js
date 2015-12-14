/**
 * Created by elle on 12/9/15.
 */
import constants from '../constants';
import extendStore from './store';
import UserStore from './users';

let ChirpStore = extendStore({
  init() {
    this.bind(constants.GOT_CHIRPS, this.set);
    this.bind(constants.CHIRPED, this.add);
  },
  timeline() {
    let {cid, following} = UserStore.currentUser;
    let ids = [cid].concat(following);
    return this._data.filter(chirp => ids.indexOf(chirp.userId) > -1);
  },
  byUserId(id) {
    return this._data.filter(chirp => chirp.userId === id)
  }
});

export default ChirpStore