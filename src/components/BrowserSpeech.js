// @flow

import React from 'react';

import Speaker from '../util/Speaker';
import Synthesiser from './Synthesiser';

type State = {
  hasError: boolean,
};
export default class BrowserSpeech extends React.Component<{}, State> {
  speaker: Speaker;

  constructor(props: {}) {
    super(props);
    this.speaker = new Speaker();
    this.state = { hasError: false };
  }

  componentDidCatch(error :Error, info: {}) {
    this.setState({ hasError: true});
    console.log(error, info);
  }

  render() {
    let mainElement;
    if (this.state.hasError) {
      mainElement = <MyError />;
    } else if (this.speaker.isSupported()) {
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
function MyError(props) {
  return (
    <div className="error">
      <div className="alert alert-danger" role="alert">
        <strong>Error</strong>
        <p>Error occured. please reload your browser (press F5).</p>
      </div>
    </div>
  );
}

