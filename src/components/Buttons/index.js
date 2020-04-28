import { connect } from 'react-redux';
import Buttons from './Buttons';
import { increment, decrement } from '../../actions/counter';

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(null, mapDispatchToProps)(Buttons);
