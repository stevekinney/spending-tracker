import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { primaryMedium, primaryDark, primaryExtraDark } from '../styles/colors';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ name, amount, date }) => (
  <article>
    <h2>{name}</h2>
    <ul>
      <li>{numeral(amount).format('$0,000.00')}</li>
      <li>{moment(date).format('dddd, MMMM Do')}</li>
    </ul>
  </article>
);

ExpenseListItem.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.string
};

export default ExpenseListItem;
