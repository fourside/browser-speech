// @flow
import React from 'react';

type Props = {
  label: string,
  disabled: boolean,
  onPlayClick: (e: Event) => void
};

export default class PlayButton extends React.Component<Props> {
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

