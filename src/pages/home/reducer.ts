import { types } from './actions';

const initialState = {
  username: '',
  posts: [],
  albums: []
}

export default (state = initialState, action: any) => {
  switch(action.type) {
    case types.SIGN_IN:
      return { ...state, username: action.payload }
    case types.SET_ENTITY:
      return { ...state, [action.payload.entity]: action.payload.data }
    default:
      return state;
  }
}