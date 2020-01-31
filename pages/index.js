import React from 'react';
import HeadSection from '../src/components/shared/head';
import DefaultButton from '../src/components/Buttons/Default/defaultButton';

const Login = () => (
  <React.Fragment>
    <HeadSection title="Login/Register" />
    <h1>Login/Register Page</h1>
    <DefaultButton>Default Button</DefaultButton>
  </React.Fragment>
);

export default Login;
