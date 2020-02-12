import React from 'react';
import { storiesOf } from '@storybook/react';

// Importing components
import DefaultButton from '../../components/Buttons/Default/defaultButton';
import SecondaryButton from '../../components/Buttons/Secondary/secondaryButton';
import InlineButton from '../../components/Buttons/Inline/inlineButton';

storiesOf('Buttons', module)
    .add('Default Button', () => {
        return (
            <div
                style={{
                    width: '50%',
                    maxWidth: '320px',
                    margin: '2rem auto'
                }}>
                <DefaultButton>SIGN UP</DefaultButton>
            </div>
        );
    })
    .add('Secondary Button', () => {
        return (
            <div
                style={{
                    width: '50%',
                    maxWidth: '320px',
                    margin: '2rem auto'
                }}>
                <SecondaryButton>SIGN IN</SecondaryButton>
            </div>
        );
    })
    .add('Inline Button', () => {
        return (
            <div
                style={{
                    width: '50%',
                    maxWidth: '320px',
                    margin: '2rem auto'
                }}>
                <InlineButton>Forget your password?</InlineButton>
            </div>
        );
    });
