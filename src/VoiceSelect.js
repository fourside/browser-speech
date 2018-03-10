import React from 'react';

export default class VoiceSelect extends React.Component {

  render() {
    const voices = this.props.speaker.getVoices().map((voice) => {
      return <option value={voice.name} key={voice.name}>{voice.name} ({voice.lang})</option>
    });
    const value = this.props.value;
    return (
      <div className="form-group">
        <label htmlFor="voice"> Voice </label>
        <select className="form-control" id="voice" value={value} onChange={(e) => this.props.onVoiceChange(e)}>
          {voices}
        </select>
      </div>
    );
  }
}

