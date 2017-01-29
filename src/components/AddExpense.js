import React, { PropTypes } from 'react';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton'
import pick from 'lodash/pick';

const selectProps = (props) => pick(props, 'name', 'amount', 'date', 'uid');

const AddExpense = (props) => {
  const { name, amount, date, handleChange, handleSubmit, handleClear } = props;
  return (
    <form onSubmit={e => handleSubmit(e, selectProps(props))}>
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
      <SubmitButton>Add Expense</SubmitButton>
      <button onClick={handleClear}>Clear</button>
    </form>
  );
};

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
