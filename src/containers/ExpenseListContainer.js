import { connect } from 'react-redux';
import ExpenseList from '../components/ExpenseList';

const mapStateToProps = ({ expenses }) => ({ expenses });

export default connect(mapStateToProps, null)(ExpenseList);
