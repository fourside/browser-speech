// @flow
import React from 'react';

type Props = {
  value: string,
  voices: Array<Class<window.SpeechSynthesisVoice>>,
  onVoiceChange: (e: SyntheticEvent<HTMLSelectElement>) => void
};

export default class VoiceSelect extends React.Component<Props> {

  shouldComponentUpdate(nextProps: Props) {
    return this.props.value !== nextProps.value || this.props.voices.length !== nextProps.voices.length;
  }

  render() {
    const voices = this.props.voices.map((voice) => {
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

