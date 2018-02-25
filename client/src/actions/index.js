import axios from 'axios';
import { USER_FETCH } from './types';

export const fetchUser = () => {
  return async function(dispatch) {
    const user = await axios.get('/api/current_user');
    dispatch({ type: USER_FETCH, payload: user });
  };
};
