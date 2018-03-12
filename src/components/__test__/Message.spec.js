import React from 'react';
import Message from '../Message';
import renderer from 'react-test-renderer';

describe('Message', () => {
  it('should be rendered without crashing.', () => {
    const tree = renderer
      .create(<Message message="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

