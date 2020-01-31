import React from 'react';
import PropTypes from 'prop-types';

import BtnInline from './inlineButton.styled';

const ButtonInline = ({ children }) => {
  return (
    <>
      <BtnInline>{children}</BtnInline>
    </>
  );
};

ButtonInline.propTypes = {
  children: PropTypes.string.isRequired
};

export default ButtonInline;
