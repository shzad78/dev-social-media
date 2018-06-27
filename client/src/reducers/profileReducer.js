import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
  profile : null,
  profiles: null,
  loading : false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}