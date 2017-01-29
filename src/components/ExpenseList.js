import React, { PropTypes } from 'react';
import ExpenseListItem from './ExpenseListItem';
import formatCurrency from '../lib/format-currency';
import sumBy from '../lib/sum-by';

const sumByAmount = sumBy('amount');

const ExpenseList = ({ expenses }) => (
  <section>
    <header>
      <h2>Total { formatCurrency(sumByAmount(expenses)) }</h2>
    </header>
    { expenses.map(e => <ExpenseListItem {...e} />) }
  </section>
);

ExpenseList.propTypes = {
  expenses: PropTypes.array
};

export default ExpenseList;
