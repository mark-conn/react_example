import { combineReducers } from 'redux';
import home from './pages/home/reducer';

export const types = {
  AUTHORIZE: 'AUTHORIZE',
  SET_LOADING: 'SET_LOADING'
}

export function authorize(payload: boolean) {
  return {
    type: types.AUTHORIZE,
    payload
  }
}

export function setLoading(payload: boolean) {
  return {
    type: types.SET_LOADING,
    payload
  }
}

const contextState = {
  auth: false,
  isLoading: false
}

function context(state = contextState, action: any) {
  switch(action.type) {
    case types.AUTHORIZE:
      return { ...state, auth: action.payload }
    case types.SET_LOADING:
      return { ...state, isLoading: action.payload }
    default:
      return state;
  }
}

export default combineReducers({
  context,
  home
});