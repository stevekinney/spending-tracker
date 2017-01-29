import { connect } from 'react-redux';
import Application from '../components/Application';

const mapStateToProps = ({ user, loading }) => ({ user, loading });

export default connect(mapStateToProps, null)(Application);
