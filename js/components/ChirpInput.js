/**
 * Created by elle on 12/10/15.
 */
let React = require('react');

let ChirpInput = React.createClass({
  handleChange(evt) {
    this.setState({
      value: evt.target.value
    })
  },
  handleClick(evt) {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    })
  },
  getInitialState() {
    return {
      value: ''
    }
  },
  render() {
    return (
      <div className="row">
        <div className="nine columns">
          <input
            className="u-full-width"
            type="text"
            placeholder="Say Something!"
            value={this.state.value}
            onChange={this.handleChange} />
        </div>
        <div className="three columns">
          <button className="u-full-width button-primary" onClick={this.handleClick}> Chirp </button>
        </div>
      </div>
    )
  }
});

export default ChirpInput