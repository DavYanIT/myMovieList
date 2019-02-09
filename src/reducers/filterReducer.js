import {
  RENDER_GROUP,
  RENDER_WITH_STATUS,
  RENDER_OF_KIND
} from '../actions/index';

const INITIAL_STATE = {group: 'all', status: 'all', kind: 'all'}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RENDER_GROUP:
      return { ...state, group: action.payload }
    case RENDER_WITH_STATUS:
      return { ...state, status: action.payload }
    case RENDER_OF_KIND:
      return { ...state, kind: action.payload }
  }
  return state;
}