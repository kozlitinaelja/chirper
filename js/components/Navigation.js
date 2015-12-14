/**
 * Created by elle on 12/11/15.
 */
let React = require('react');

import { Link } from 'react-router';
import UserStore from '../stores/users';

let Navigation = React.createClass({
  getInitialState() {
    return {
      username: UserStore.currentUser.username
    }
  },
  render() {
    return (
      <ul>
        <li> <Link to="/"> Timeline </Link> </li>
        <li> <Link to="users"> Users </Link> </li>
        <li> <a href="/logout"> Logout </a> ({this.state.username})</li>
      </ul>
    )
  }
});

export default Navigation
