/**
 * Created by elle on 12/10/15.
 */
let React = require('react');

import ChirpInput from './ChirpInput';
import actions from '../actions';
import ChirpStore from '../stores/chirps';
import ChirpList from './ChirpList';

let Home = React.createClass({
  mixins: [ChirpStore.mixin],
  saveChirp(text) {
    actions.chirp(text)
  },
  onChange() {
    this.setState(this.getInitialState());
  },
  getInitialState() {
    return {
      chirps: ChirpStore.timeline()
    }
  },
  render(){
    return (
      <div>
        <ChirpInput onSave={this.saveChirp}/>
        <ChirpList chirps={this.state.chirps} />
      </div>
    )
  }
});

export default Home