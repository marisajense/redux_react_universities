import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import universities from './universities';
import university from './university';

const rootReducer = combineReducers({
  routing: routerReducer,
  universities,
  university
});

export default rootReducer;
