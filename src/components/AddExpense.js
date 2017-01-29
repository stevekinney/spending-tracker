import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import Button from './Button';
import pick from 'lodash/pick';

const selectProps = (props) => pick(props, 'name', 'amount', 'date', 'uid');

const AddExpense = (props) => {
  const { name, amount, date, handleChange, handleSubmit, handleClear } = props;
  return (
    <form
      onSubmit={e => handleSubmit(e, selectProps(props))}
      className={css(styles.AddExpense)}
    >
      <FormInput
        label="Name of Expense"
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
      />
      <FormInput
        label="Amount"
        name="amount"
        type="number"
        value={amount}
        onChange={handleChange}
      />
      <FormInput
        label="Date of Purchase"
        name="date"
        type="date"
        value={date}
        onChange={handleChange}
      />
      <div className={css(styles.buttons)}>
        <SubmitButton>Add Expense</SubmitButton>
        <Button onClick={handleClear}>Clear</Button>
      </div>
    </form>
  );
};

const styles = StyleSheet.create({
  AddExpense: {
    margin: '1em',
    padding: '1em'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around'
  }
});

AddExpense.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.string,
  date: PropTypes.string,
  uid: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleClear: PropTypes.func,
};

export default AddExpense;
