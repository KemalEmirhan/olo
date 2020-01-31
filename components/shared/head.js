import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const HeadSection = props => {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

HeadSection.propTypes = {
  title: PropTypes.string
};

export default HeadSection;
