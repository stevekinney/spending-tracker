import React, { PropTypes } from 'react';

const SubmitButton = ({ children, ...rest }) => {
  return (
    <input type="submit" value={children} {...rest} />
  );
};

SubmitButton.propTypes = {
  children: PropTypes.string
};

export default SubmitButton
