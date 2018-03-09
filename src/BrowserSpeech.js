import React from 'react';
import ReactDOM from 'react-dom';

class BrowserSpeech extends React.Component {
  render() {
    return (
      <Header />
    )
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
