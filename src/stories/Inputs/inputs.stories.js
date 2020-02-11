import React from 'react';
import { storiesOf } from '@storybook/react';

// Import style sheets
import '../../../sass/util.scss';

// Import components
import TextInput from '../../components/Inputs/Text/text';

storiesOf('Inputs', module)
  .add('Text', () => {
    return (
      <div className="container-story">
        <TextInput />
      </div>
    );
  })
  .add('Email', () => {
    return <></>;
  })
  .add('Password', () => {
    return <></>;
  })
  .addDecorator(storyFn => <div className="wrapper-story">{storyFn()}</div>);
