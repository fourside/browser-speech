import React from 'react';
import ReactDOM from 'react-dom';

class BrowserSpeech extends React.Component {
  render() {
    return (
      <div>
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
        Enter message and push play button.
        <Message />
        <Range name="Rate"/>
        <Range name="Pitch"/>
        <VoiceSelect />
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
        <select>
          <option>voice supported by your browser</option>
        </select>
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
