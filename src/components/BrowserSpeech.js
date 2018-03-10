import React from 'react';
import ReactDOM from 'react-dom';

import Speaker from '../util/Speaker';
import Synthesiser from './Synthesiser';

class BrowserSpeech extends React.Component {
  constructor(props) {
    super(props);
    this.speaker = new Speaker();
  }
  render() {
    let mainElement;
    if (this.speaker.isSupported()) {
      mainElement = <Synthesiser speaker={this.speaker} />;
    } else {
      mainElement = <NotSupported />;
    }
    return (
      <div className="main">
        <Header />
        {mainElement}
      </div>
    );
  }
}
function Header(props) {
  return (
    <header><h1>Browser Speech</h1></header>
  );
}
function NotSupported(props) {
  return (
    <div className="not-supported">
      <div className="alert alert-warning" role="alert">
        <strong>your browser does not support web speech api.</strong>
        <p>please open this with google chrome or mozilla firefox.</p>
      </div>
    </div>
  );
}


export default function() {
  ReactDOM.render(
    <BrowserSpeech />,
    document.getElementById('root')
  );
}
