import React, { PropTypes } from 'react';

const SubmitButton = ({ children }) => {
  return (
    <input type="submit" value={children} />
  );
};

SubmitButton.propTypes = {
  children: PropTypes.string
};

export default SubmitButton
