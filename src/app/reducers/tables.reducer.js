import {GET_TABLES_SUCCEEDED} from '../constants/actionTypes.constant';

const initialState = {
  tables: []
};

const tablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TABLES_SUCCEEDED:
      return {
        ...state,
        tables: action.tables
      };
    default:
      return state;
  }
};

export default tablesReducer;
