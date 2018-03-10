import React from 'react';

export default class PlayButton extends React.Component {
  render() {
    return (
      <div className="form-group">
        <button className="btn btn-lg btn-primary" type="button" onClick={(e) => this.props.onPlayClick(e)}>Play</button>
      </div>
    );
  }
}

