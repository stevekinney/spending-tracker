import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import UserInfo from './UserInfo';
import AddExpenseContainer from '../containers/AddExpenseContainer';
import ExpenseListContainer from '../containers/ExpenseListContainer';
import SignInContainer from '../containers/SignInContainer';

const Application = ({ user, loading }) => {
  if (loading) return <p>Loading…</p>;
  if (!user) return <SignInContainer/>;

  return (
    <section className={css(styles.application)}>
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

const styles = StyleSheet.create({
  application: {
    maxWidth: '600px',
    height: '100vh',
    margin: 'auto',
    font: 'menu'
  }
});

export default Application;
