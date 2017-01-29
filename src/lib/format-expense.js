import numeral from 'numeral';

export default ({ name, amount, date, uid }) => {
  return {
    name,
    amount: numeral(amount).value(),
    date,
    uid
  };
};
