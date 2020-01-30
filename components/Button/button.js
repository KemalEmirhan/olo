import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDefault, ButtonInline, ButtonSecondary } from './button.styled';

const Button = props => {
  return (
    <React.Fragment>
      {(() => {
        switch (props.type) {
          case 'secondary':
            return <ButtonSecondary>{props.message}</ButtonSecondary>;
          case 'inline':
            return <ButtonInline>{props.message}</ButtonInline>;
          case 'default':
            return <ButtonDefault>{props.message}</ButtonDefault>;
          default:
            return null;
        }
      })()}
    </React.Fragment>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string
};

export default Button;
