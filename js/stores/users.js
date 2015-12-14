/**
 * Created by elle on 12/10/15.
 */
import constants from '../constants';
import extendStore from './store';

let UserStore = extendStore({
  init() {
    this.bind(constants.GOT_USERS, this.set);
    this.bind(constants.FOLLOWED, this.updateUser);
    this.bind(constants.UNFOLLOWED, this.updateUser);
  },
  currentUser: USER,

  updateUser(data){
    this.currentUser = data;
  }
});

export default UserStore
