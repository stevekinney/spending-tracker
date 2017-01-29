import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';

const mapStateToProps = ({ user }) => user || {};

export default connect(mapStateToProps, null)(UserInfo);
