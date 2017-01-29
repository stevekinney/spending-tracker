import React, { PropTypes } from 'react';

const Button = ({ children, ...rest }) => {
  return (
   <button {...rest}>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.string
};

export default Button
