import { actionTypes } from '../static'

const { SET_SEARCH_FIELD, SET_SEARCH_TERM } = actionTypes

const INITIAL_STATE = {field: 'name', term: ''}

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SET_SEARCH_FIELD:
      return { ...state, field: payload }
    case SET_SEARCH_TERM:
      return { ...state, term: payload }
  }
  return state;
}