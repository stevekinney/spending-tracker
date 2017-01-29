import React, { PropTypes } from 'react';

const SignIn = ({ signIn }) => {
  return (
    <div className="SignIn">
      <button onClick={signIn}>
        Sign In
      </button>
    </div>
  );
};

SignIn.propTypes = {
  signIn: PropTypes.func
};

export default SignIn;
