import React from 'react';
import PlayButton from '../PlayButton';
import renderer from 'react-test-renderer';

describe('PlayButton', () => {
  it('should be rendered.', () => {
    const tree = renderer
      .create(<PlayButton label="test" disabled={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

