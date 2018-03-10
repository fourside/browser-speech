import React from 'react';
import ReactDOM from 'react-dom';

import Synthesiser from './Synthesiser';

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

export default function() {
  ReactDOM.render(
    <BrowserSpeech />,
    document.getElementById('root')
  );
}
