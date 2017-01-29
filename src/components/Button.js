import React, { PropTypes } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../styles/button';

const Button = ({ children, ...rest }) => {
  return (
   <button className={css(styles.button)} {...rest}>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.string
};

export default Button
