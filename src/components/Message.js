// @flow
import React from 'react';

type Props = {
  message: string,
  onMessageChange: (x: SyntheticEvent<HTMLTextAreaElement>) => void,
};

export default class Message extends React.Component<Props> {
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

