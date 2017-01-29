import React, { PropTypes } from 'react';

const UserInfo = ({ user }) => <div>{user && user.displayName}</div>;

UserInfo.propTypes = {
  user: PropTypes.object
};

export default UserInfo;
