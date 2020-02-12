import App from 'next/app';
import React from 'react';

export default class UIApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Component {...pageProps} />
            </>
        );
    }
}
