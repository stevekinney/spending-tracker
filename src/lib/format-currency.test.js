import formatCurrency from './format-currency';

it('formats integers as currency correctly', () => {
  expect(formatCurrency(23)).toEqual('$23.00');
});

it('correctly renders decimals', () => {
  expect(formatCurrency(23.23)).toEqual('$23.23');
});

it('correctly renders the comma before the thousands place', () => {
  expect(formatCurrency(2300)).toEqual('$2,300.00');
});
