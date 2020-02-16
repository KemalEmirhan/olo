import React from 'react';
import { storiesOf } from '@storybook/react';

// Import style sheets
import '../../../sass/util.scss';

// Import components
import TextInput from '../../components/Inputs/Text/text';
import EmailInput from '../../components/Inputs/Email/email';
import PasswordInput from '../../components/Inputs/Password/password';

storiesOf('Inputs', module)
    .add('Text', () => {
        return <TextInput />;
    })
    .add('Email', () => {
        return <EmailInput />;
    })
    .add('Password', () => {
        return <PasswordInput />;
    })
    .addDecorator(storyFn => (
        <div className='wrapper-story'>
            <div className='container-story'>{storyFn()}</div>
        </div>
    ));
