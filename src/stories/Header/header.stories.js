import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../../components/Header/header';

storiesOf('Header', module)
  .add('with text', () => {
    return (
      <>
        <Header>New Storybook Story</Header>
      </>
    );
  })
  .add('without text just emoji', () => {
    return (
      <>
        <Header>🎉</Header>
      </>
    );
  });
