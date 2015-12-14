/**
 * Created by elle on 12/11/15.
 */
let React = require('react');

import UserStore from '../stores/users';
import actions from '../actions';
import { Link } from 'react-router';
import Box from './Box';
import FollowButton from './FollowButton';

let UserList = React.createClass({
  mixins: [UserStore.mixin],
  onChange() {
    this.setState(this.getInitialState());
  },
  getInitialState() {
    return {
      users: UserStore.all(),
      user: UserStore.currentUser
    }
  },
  render(){
    let users = this.state.users.filter(user => this.state.user.cid !== user.cid);

    let userItems = users.map(
      user => (<Box key={user.cid} user={user}>
                <FollowButton userId={user.cid}/>
               </Box>)
    );

    return (
      <ul>
        {userItems}
      </ul>
    )
  }
});

export default UserList
