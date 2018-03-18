// @flow
import React from 'react';

import Message from './Message';
import Range from './Range';
import VoiceSelect from './VoiceSelect';
import PlayButton from './PlayButton';
import Speaker from '../util/Speaker';

type Props = {
  speaker: Speaker
};
type State = {
  message: string,
  rate: number,
  pitch: number,
  voiceName: string,
  isSpeaking: boolean,
  isPending: boolean,
  voices: Array<Class<window.SpeechSynthesisVoice>>,
};

export default class Synthesiser extends React.Component<Props, State> {
  speaker: Speaker;

  constructor(props: Props) {
    super(props);
    this.speaker = this.props.speaker;
    this.speaker.setOnUttrEvent(() => {
      this.setSpeakerState();
    });
    this.state = {
      message: '',
      rate: 1,
      pitch: 1,
      voiceName: '',
      isSpeaking: false,
      isPending: false,
      voices: [],
    };
  }

  handleMessageChange(e: SyntheticEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    this.setState({message: e.currentTarget.value});
  }
  handleRateChange(e: SyntheticEvent<HTMLInputElement>) {
    e.preventDefault();
    const value = parseFloat(e.currentTarget.value);
    this.setState({rate: value});
  }
  handlePitchChange(e: SyntheticEvent<HTMLInputElement>) {
    e.preventDefault();
    const value = parseFloat(e.currentTarget.value);
    this.setState({pitch: value});
  }
  handleVoiceChange(e: SyntheticEvent<HTMLSelectElement>) {
    e.preventDefault();
    this.setState({voiceName: e.currentTarget.value});
  }
  handlePlayClick(e: Event) {
    const voice = this.speaker.getVoice(this.state.voiceName);
    this.speaker.speak(
      this.state.message,
      this.state.rate,
      this.state.pitch,
      voice,
    );
    this.setSpeakerState();
  }
  handleCancelClick(e: Event) {
    this.speaker.cancel();
    this.setSpeakerState();
  }

  setSpeakerState() {
    this.setState({
      isSpeaking: this.speaker.isSpeaking(),
      isPending: this.speaker.isPending(),
    })
  }

  componentWillMount() {
    const intervalId = setInterval(() => {
      const voices = this.speaker.getVoices();
      if (voices.length !== 0) {
        this.setState({voices: voices});
        clearInterval(intervalId);
      }
    }, 100);
  }

  render() {
    const isPending = this.state.isPending;
    const isSpeaking = this.state.isSpeaking;
    return (
      <form>
        <h4 className="lead description">Enter message and push play button.</h4>

        <Message
          message={this.state.message} onMessageChange={(e) => this.handleMessageChange(e)} />
        <Range
          name="Rate"  min={0.5} max={2} step={0.1} value={this.state.rate}
          onRangeChange={(e) => this.handleRateChange(e)} />
        <Range
          name="Pitch" min={0}  max={2} step={0.1} value={this.state.pitch}
          onRangeChange={(e) => this.handlePitchChange(e)} />
        <VoiceSelect voices={this.state.voices} value={this.state.voiceName}
          onVoiceChange={(e) => this.handleVoiceChange(e)}/>
        <div className="form-group">
          <PlayButton label="Play"
            disabled={isPending || isSpeaking}
            onPlayClick={(e) => this.handlePlayClick(e)}/>
          <PlayButton label="Cancel"
            disabled={!(isSpeaking || isPending)}
            onPlayClick={(e) => this.handleCancelClick(e)}/>
        </div>
      </form>
    );
  }
}

