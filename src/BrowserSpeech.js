import React from 'react';
import ReactDOM from 'react-dom';

class BrowserSpeech extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Synthesiser />
      </div>
    );
  }
}
function Header(props) {
  return (
    <header><h1>Browser Speech</h1></header>
  );
}

class Synthesiser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mesasge: '',
      rate: 1,
      pitch: 1,
      voice: '',
    };
  }

  componentDidMount() {
    this.voices = undefined; // TODO fetch voices and setState voice
  }

  handleMessageChange(e) {
    e.preventDefault();
    this.setState({message: [e.target.value]});
  }
  handleRateChange(e) {
    e.preventDefault();
    this.setState({rate: [e.target.value]});
  }
  handlePitchChange(e) {
    e.preventDefault();
    this.setState({pitch: [e.target.value]});
  }

  render() {
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
        <VoiceSelect voices={this.voices} voice={this.state.voice} />
        <PlayButton />
      </form>
    );
  }
}

class Message extends React.Component {
  render() {
    const message = this.props.message;
    return (
      <div className="form-group">
        <label htmlFor="message"> Message </label>
          <textarea id="message" className="form-control" placeholder="type what you want to let me say" 
            value={message} onChange={(e) => this.props.onMessageChange(e)}
          />
      </div>
    );
  }
}
class Range extends React.Component {
  render() {
    const name = this.props.name;
    const min = this.props.min;
    const max = this.props.max;
    const step = this.props.step;
    const value = this.props.value;
    return (
      <div className="form-group">
        <label htmlFor={name}> {name} </label> {value}
        <input type="range" id={name} min={min} max={max} step={step} value={value} className="form-control"
          onChange={(e) => this.props.onRangeChange(e)}/>
      </div>
    );
  }
}
class VoiceSelect extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="voice"> Voice </label>
        <select className="form-control" id="voice">
          <option>voice supported by your browser</option>
        </select>
      </div>
    );
  }
}
class PlayButton extends React.Component {
  render() {
    return (
      <div className="form-group">
        <button className="btn btn-lg btn-primary" type="submit">Play</button>
      </div>
    );
  }
}


export default function() {
  ReactDOM.render(
    <BrowserSpeech />,
    document.getElementById('root')
  );
}
