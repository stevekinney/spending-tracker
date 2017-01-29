import { connect } from 'react-redux';
import AddExpense from '../components/AddExpense';
import { updateNewExpense, clearNewExpenseForm } from '../actions';
import { getReference } from '../firebase';
import formatExpense from '../lib/format-expense';

const mapStateToProps = ({ newExpense, user }) => ({
  name: newExpense.name,
  amount: newExpense.amount,
  date: newExpense.date,
  uid: user.uid
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(key, value) {
      dispatch(updateNewExpense(key, value))
    },
    handleSubmit(event, expense) {
      event.preventDefault();
      getReference().push(formatExpense(expense));
      dispatch(clearNewExpenseForm());
    },
    handleClear() {
      dispatch(clearNewExpenseForm());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
