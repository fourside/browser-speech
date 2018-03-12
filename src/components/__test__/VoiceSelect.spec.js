import React from 'react';
import VoiceSelect from '../VoiceSelect';
import Speaker from '../../util/Speaker';
import renderer from 'react-test-renderer';

describe('VoiceSelect', () => {
  it('should be rendered without crashing.', () => {
    const speaker = new Speaker(); 
    const tree = renderer
      .create(<VoiceSelect
        value="test" speaker={speaker}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

