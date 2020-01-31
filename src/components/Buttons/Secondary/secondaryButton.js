import React from 'react';
import PropTypes from 'prop-types';

import BtnSecondary from './secondaryButton.styled';

const ButtonSecondary = ({ children }) => {
  return (
    <>
      <BtnSecondary>{children}</BtnSecondary>
    </>
  );
};

ButtonSecondary.propTypes = {
  children: PropTypes.string.isRequired
};

export default ButtonSecondary;
