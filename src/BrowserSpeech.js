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
  render() {
    return (
      <form>
        <h4 className="description">Enter message and push play button.</h4>
        <Message />
        <Range name="Rate"/>
        <Range name="Pitch"/>
        <VoiceSelect />
        <PlayButton />
      </form>
    );
  }
}

class Message extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="message"> Message </label>
          <textarea id="message" className="form-control" placeholder="type what you want to let me say" />
      </div>
    );
  }
}
class Range extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div className="form-group">
        <label htmlFor={name}> {name} </label>
        <input type="range" id={name} className="form-control" />
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
