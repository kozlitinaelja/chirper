/**
 * Created by elle on 12/10/15.
 */
let React = require('react');

import { Link } from 'react-router';
import {avatar} from '../utils';

let Box = React.createClass({
  render(){
    let {user, timestamp = '' } = this.props;
    let linkUrl = '/user/' + (typeof user.userId === 'number' ? user.userId : user.cid);

    timestamp = timestamp ? `${String.fromCharCode(8226)} ${timestamp}` : '';

    return (
      <li className="row chirp">
        <Link className="two columns" to={linkUrl}>
          <img src={avatar(user.email)} title={user.fullname}/>
        </Link>
        <div className="ten columns">
          <p>
            <strong> {user.fullname} </strong>
            <span className="timestamp">
              @{user.username} {timestamp}
            </span>
          </p>
          <p> {this.props.children} </p>
        </div>
      </li>
    )
  }
});

export default Box;