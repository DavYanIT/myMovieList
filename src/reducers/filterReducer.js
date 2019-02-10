import { actionTypes } from '../static'

const { RENDER_GROUP, RENDER_WITH_STATUS, RENDER_OF_KIND } = actionTypes

const INITIAL_STATE = {group: 'all', status: 'all', kind: 'all'}

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case RENDER_GROUP:
      return { ...state, group: payload }
    case RENDER_WITH_STATUS:
      return { ...state, status: payload }
    case RENDER_OF_KIND:
      return { ...state, kind: payload }
  }
  return state;
}