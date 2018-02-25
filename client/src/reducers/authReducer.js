import { USER_FETCH } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case USER_FETCH:
      const res = action.payload || false;
      console.log(res);
      return res;
    default:
      return state;
  }
}
