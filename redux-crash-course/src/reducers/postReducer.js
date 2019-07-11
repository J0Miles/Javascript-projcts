import { FETCH_POSTS, NEW_POST } from '../actions/types';

const inititalState = {
  items: [],
  item: {}
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
