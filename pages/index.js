import React from 'react';
import HeadSection from '../components/shared/head';
import Button from '../components/Button/button';

const Login = () => (
  <React.Fragment>
    <HeadSection title="Login/Register" />
    <h1>Login/Register Page</h1>
    <Button type="default" message="DEFAULT" />
  </React.Fragment>
);

export default Login;
