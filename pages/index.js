import React from 'react'
import Head from 'next/head'

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  color: #cacaca;
  text-decoration: underline;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <div className="hero">
      <Title>Welcome to Next.js!</Title>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

    </div>
  </div>
)

export default Home;
