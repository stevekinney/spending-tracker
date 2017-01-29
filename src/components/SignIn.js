import React, { PropTypes } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../styles/button';

const SignIn = ({ signIn }) => {
  return (
    <div className="SignIn">
      <button className={css(styles.button)} onClick={signIn}>
        Sign In
      </button>
    </div>
  );
};

SignIn.propTypes = {
  signIn: PropTypes.func
};

export default SignIn;
