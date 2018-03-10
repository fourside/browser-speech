import React from 'react';

import Speaker from '../util/Speaker';
import Message from './Message';
import Range from './Range';
import VoiceSelect from './VoiceSelect';
import PlayButton from './PlayButton';

export default class Synthesiser extends React.Component {
  constructor(props) {
    super(props);
    this.speaker = new Speaker();
    this.speaker.setOnUttrEvent(() => {
      this.setSpeakerState();
    });
    const voiceName = this.speaker.getVoices()[0].name;
    this.state = {
      message: '',
      rate: 1,
      pitch: 1,
      voiceName: voiceName,
      isSpeaking: false,
      isPending: false,
    };
  }

  handleMessageChange(e) {
    e.preventDefault();
    this.setState({message: e.target.value});
  }
  handleRateChange(e) {
    e.preventDefault();
    this.setState({rate: e.target.value});
  }
  handlePitchChange(e) {
    e.preventDefault();
    this.setState({pitch: e.target.value});
  }
  handleVoiceChange(e) {
    e.preventDefault();
    this.setState({voiceName: e.target.value});
  }
  handlePlayClick(e) {
    const voice = this.speaker.getVoice(this.state.voiceName);
    this.speaker.speak(
      this.state.message,
      this.state.rate,
      this.state.pitch,
      voice,
    );
    this.setSpeakerState();
  }
  handleCancelClick(e) {
    this.speaker.cancel();
    this.setSpeakerState();
  }

  setSpeakerState() {
    this.setState({
      isSpeaking: this.speaker.isSpeaking(),
      isPending: this.speaker.isPending(),
    })
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
          name="Rate"  min="0.5" max="2" step="0.1" value={this.state.rate}
          onRangeChange={(e) => this.handleRateChange(e)} />
        <Range
          name="Pitch" min="0"   max="2" step="0.1" value={this.state.pitch}
          onRangeChange={(e) => this.handlePitchChange(e)} />
        <VoiceSelect speaker={this.speaker} value={this.state.voiceName} 
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

