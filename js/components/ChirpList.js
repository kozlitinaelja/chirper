/**
 * Created by elle on 12/10/15.
 */
let React = require('react');
let moment = require('moment');

import Box from './Box';


let ChirpList = React.createClass({
  render() {
    let items = this.props.chirps.map(
      chirp => (<Box key={chirp.cid} user={chirp} timestamp={moment(chirp.$created).fromNow()}>
        {chirp.text}
      </Box>)
    );

    return (
      <ul>
        {items}
      </ul>
    )
  }
});

export default ChirpList