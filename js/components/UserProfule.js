/**
 * Created by elle on 12/14/15.
 */
let React = require('react');

import UserStore from '../stores/users';
import ChirpStore from '../stores/chirps';
import * as utils from '../utils';
import FollowButton from './FollowButton';

let UserProfile = React.createClass({
  mixins: [UserStore.mixin, ChirpStore.mixin],
  onChange() {
    this.setState(this.getInitialState());
  },
  getInitialState() {
    //Getting user id from url token
    let userId = parseInt(this.props.params.id, 10);
    return {
      user: UserStore.get(userId) || {},
      chirps: ChirpStore.byUserId(userId)
    }
  },
  render() {
    let chirps = this.state.chirps.map(chirp => <li key={chirp.cid}>{chirp.text}</li>);
    return (
      <div>
        <img className="two columns" src={utils.avatar(this.state.user.email)}/>
        <div className="ten columns">
          <h1> {this.state.user.fullname} </h1>
          <h3 className="timestamp"> {this.state.user.username} </h3>
          <p> <FollowButton userId={this.state.user.cid} /></p>

          <ul>
            { chirps}
          </ul>
        </div>
      </div>
    )
  }
});

export default UserProfile;