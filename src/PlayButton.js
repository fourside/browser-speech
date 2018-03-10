import React from 'react';

export default class PlayButton extends React.Component {
  render() {
    return (
      <button className="btn btn-lg btn-primary btn-play" type="button"
        disabled={this.props.disabled}
        onClick={(e) => this.props.onPlayClick(e)}>
        {this.props.label}
      </button>
    );
  }
}

