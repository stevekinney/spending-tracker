import React, { PropTypes } from 'react';
import UserInfo from './UserInfo';
import AddExpenseContainer from '../containers/AddExpenseContainer';
import ExpenseListContainer from '../containers/ExpenseListContainer';
import SignInContainer from '../containers/SignInContainer';

const Application = ({ user, loading }) => {
  if (loading) return <p>Loading…</p>;
  if (!user) return <SignInContainer/>;

  return (
    <section>
      <h1>Spending Teacker</h1>
      <AddExpenseContainer/>
      <ExpenseListContainer/>
      <UserInfo user={user}/>
    </section>
  );
};

Application.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool
};

export default Application;
