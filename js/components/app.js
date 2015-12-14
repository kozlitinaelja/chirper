/**
 * Created by elle on 12/9/15.
 */
let React = require('react');

import Navigation from './Navigation';

let App = React.createClass({
  /*
   *  all nested routes will be in property children
   * */

  render() {
    return (
      <div>
        <div className="row">
          <h1>Chirper</h1>
        </div>
        <div className="row">
          <div className="three columns">
            <Navigation />
          </div>
          <div className="nine columns">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
});

export default App;