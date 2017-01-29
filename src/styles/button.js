import { StyleSheet } from 'aphrodite/no-important';
import { primaryLight, primaryMedium, primaryDark } from './colors';

export default StyleSheet.create({
  button: {
    backgroundColor: 'white',
    border: `2px solid ${primaryDark}`,
    color: primaryDark,
    padding: '1em 1.5em',
    flexGrow: '1',
    transition: 'all 0.2s',
    ':hover': {
      backgroundColor: primaryMedium,
      color: 'white'
    },
    ':focus': {
      backgroundColor: primaryMedium,
      color: 'white'
    },
    ':active': {
      backgroundColor: primaryDark,
      borderColor: primaryLight,
      color: 'white'
    }
  },
  submitButton: {
    backgroundColor: primaryLight,
    borderColor: primaryDark,
    color: 'white',
    ':hover': {
      backgroundColor: primaryMedium
    }
  }
});
