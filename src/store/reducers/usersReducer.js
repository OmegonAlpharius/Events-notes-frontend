import {
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  GET_SUBSCRIBERS_FAILURE,
  GET_SUBSCRIBERS_REQUEST,
  GET_SUBSCRIBERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  SUBSCRIBE_USER,
  SUBSCRIBE_USER_FAILURE,
  SUBSCRIBE_USER_SUCCESS,
  UNSUBSCRIBE_USER,
  UNSUBSCRIBE_USER_FAILURE,
  UNSUBSCRIBE_USER_SUCCESS,
} from '../actionTypes';

const initialState = {
  registerError: null,
  loginError: null,
  user: null,
  error: null,
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_FAILURE:
      return { ...state, registerError: action.error };
    case CREATE_USER_SUCCESS:
      return { ...state, registerError: null };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.user, loginError: null };
    case LOGIN_USER_FAILURE:
      return { ...state, loginError: action.error };
    case LOGOUT_USER_SUCCESS:
      return { ...state, user: null };
    case GET_USERS_REQUEST:
      return { ...state, error: null };
    case GET_USERS_FAILURE:
      return { ...state, error: action.error };
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case SUBSCRIBE_USER:
      return { ...state, error: null };
    case SUBSCRIBE_USER_FAILURE:
      return { ...state, error: action.error };
    case SUBSCRIBE_USER_SUCCESS:
      return { ...state, error: null };
    case UNSUBSCRIBE_USER:
      return { ...state, error: null };
    case UNSUBSCRIBE_USER_FAILURE:
      return { ...state, error: action.error };
    case UNSUBSCRIBE_USER_SUCCESS:
      return { ...state, error: null };
    case GET_SUBSCRIBERS_REQUEST:
      return { ...state };
    case GET_SUBSCRIBERS_FAILURE:
      return { ...state, error: action.error };
    case GET_SUBSCRIBERS_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
