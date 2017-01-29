import formatExpense from './format-expense';

it('should turn amount strings to integers', () => {
  expect(formatExpense({
    name: 'Test Expense',
    amount: '23',
    date: '2017-01-28',
    uid: 'test'
  }).amount).toEqual(23);
});

it('should turn amount strings to floats', () => {
  expect(formatExpense({
    name: 'Test Expense',
    amount: '23.23',
    date: '2017-01-28',
    uid: 'test'
  }).amount).toEqual(23.23);
});

it('should work even with a dollar sign', () => {
  expect(formatExpense({
    name: 'Test Expense',
    amount: '$23.23',
    date: '2017-01-28',
    uid: 'test'
  }).amount).toEqual(23.23);
});
