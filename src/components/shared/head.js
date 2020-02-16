import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const HeadSection = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel='icon' href='/favicon.ico' />
            <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
            />
            <link
                href='https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700&display=swap'
                rel='stylesheet'></link>
        </Head>
    );
};

HeadSection.propTypes = {
    title: PropTypes.string
};

export default HeadSection;
