import React from 'react';
import ReactDOM from 'react-dom';

class BrowserSpeech extends React.Component {
  render() {
    return (
      <h1>hello browser speech</h1>
    )
  }
}

export default function() {
  ReactDOM.render(
    <BrowserSpeech />,
    document.getElementById('root')
  );
}
