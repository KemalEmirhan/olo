import React from 'react';
import PropTypes from 'prop-types';

import BtnDefault from './defaultButton.styled';

const DefaultButton = ({ children }) => {
  return (
    <>
      <BtnDefault>{children}</BtnDefault>
    </>
  );
};

DefaultButton.propTypes = {
  children: PropTypes.string.isRequired
};

export default DefaultButton;
