import { connect } from 'react-redux';
import View from './View';

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(mapStateToProps, null)(View);
