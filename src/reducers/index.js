import moment from 'moment';

const newExpense =  {
  name: '',
  amount: '',
  date: moment().format('YYYY-MM-DD')
};

const initialState = {
  user: null,
  loading: true,
  expenses: [],
  newExpense
};

export default (state = initialState, action) => {
  if (action.type === 'AUTH_STATE_CHANGED') {
    return Object.assign({}, state, { user: action.user, loading: false });
  }

  if (action.type === 'UPDATE_NEW_EXPENSE') {
    const updatedExpense = Object.assign({}, state.newExpense, action.newExpense);
    return Object.assign({}, state, { newExpense: updatedExpense });
  }

  if (action.type === 'CLEAR_NEW_EXPENSE_FORM') {
    return Object.assign({}, state, { newExpense });
  }

  if (action.type === 'UPDATE_EXPENSES') {
    return Object.assign({}, state, { expenses: action.expenses });
  }

  return state;
}
