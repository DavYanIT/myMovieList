import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import searchReducer from './searchReducer';
import { reducer as formReducer } from 'redux-form';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  filterProps: filterReducer,
  searchProps: searchReducer,
  form: formReducer,
  fStore: firestoreReducer
});

export default rootReducer;
