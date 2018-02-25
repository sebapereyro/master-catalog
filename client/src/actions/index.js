import axios from 'axios';
import { USER_FETCH } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: USER_FETCH, payload: res.data });
};
