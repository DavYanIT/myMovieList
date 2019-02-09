import {
  SET_SEARCH_FIELD,
  SET_SEARCH_TERM
} from '../actions/index';

const INITIAL_STATE = {field: 'name', term: ''}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_FIELD:
      return { ...state, field: action.payload }
    case SET_SEARCH_TERM:
      return { ...state, term: action.payload }
  }
  return state;
}