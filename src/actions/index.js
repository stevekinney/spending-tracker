import firebase, { provider } from '../firebase';

export const signInWithFirebase = () => {
  firebase.auth().signInWithRedirect(provider);
};

export const changeAuthState = (user) => {
  return {
    type: 'AUTH_STATE_CHANGED',
    user
  };
};

export const updateNewExpense = (key, value) => {
  return {
    type: 'UPDATE_NEW_EXPENSE',
    newExpense: { [key]: value }
  };
};

export const clearNewExpenseForm = () => {
  return {
    type: 'CLEAR_NEW_EXPENSE_FORM',
  };
};

export const updateExpenses = (expenses) => {
  return {
    type: 'UPDATE_EXPENSES',
    expenses
  };
};
