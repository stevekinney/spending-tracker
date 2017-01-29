import React, { PropTypes } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../styles/button';

const SubmitButton = ({ children, ...rest }) => {
  return (
    <input
      type="submit"
      className={css(styles.button, styles.submitButton)}
      value={children}
      {...rest}
    />
  );
};

SubmitButton.propTypes = {
  children: PropTypes.string
};

export default SubmitButton
