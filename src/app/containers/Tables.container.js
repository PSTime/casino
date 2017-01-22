import {connect} from 'react-redux';
import Tables from '../components/Tables.component';
import {getTables} from '../actions/tables.actions';

const mapStateToProps = state => {
  return {
    tables: state.tablesReducer.tables
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTables: () => {
      dispatch(getTables());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
