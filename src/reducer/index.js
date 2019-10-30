import { combineReducers } from 'redux';
import rootReducer from './reducer.js';

export default combineReducers({ fileSystem:rootReducer });
// export default rootReducer;
