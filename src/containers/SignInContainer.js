import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import { signInWithFirebase } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    signIn() {
      dispatch(signInWithFirebase())
    }
  }
};

export default connect(null, mapDispatchToProps)(SignIn);
