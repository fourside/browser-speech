import React from 'react';
import Range from '../Range';
import renderer from 'react-test-renderer';

describe('Range', () => {
  it('should be rendered without crashing.', () => {
    const tree = renderer
      .create(<Range
          name="test" min={0} max={2} step={0.5} value={1.0} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

