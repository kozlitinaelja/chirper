/**
 * Created by elle on 12/11/15.
 */
let React = require('react');

import actions from '../actions';
import UserStore from '../stores/users';

let FollowButton = React.createClass({
  mixins: [UserStore.mixin],
  follow(evt) {
    actions.follow(this.props.userId);
  },
  unfollow(evt){
    actions.unfollow(this.props.userId);
  },
  onChange() {
    this.setState(this.getInitialState());
  },
  getInitialState() {
    return {
      id: UserStore.currentUser.cid,
      currentFollowing: UserStore.currentUser.following
    }
  },
  render() {
    let { userId } = this.props;
    if (this.state.id === userId) {
      return <span>This is you!</span>
    }

    let text, action;

    if (this.state.currentFollowing.indexOf(userId) === -1) {
      text = 'Follow';
      action = this.follow
    } else {
      text = 'Unfollow';
      action = this.unfollow
    }

    return (
      <button onClick={action}> {text} </button>
    )
  }
});

export default FollowButton;
