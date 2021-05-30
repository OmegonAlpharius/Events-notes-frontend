import {
  CREATE_USER,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
} from '../actionTypes';

export const createUserSuccess = () => {
  return { type: CREATE_USER_SUCCESS };
};
export const createUserFailure = (error) => {
  return { type: CREATE_USER_FAILURE, error };
};

export const createUser = (userData) => {
  return { type: CREATE_USER, userData };
};

export const loginUserSuccess = (user) => {
  return { type: LOGIN_USER_SUCCESS, user };
};
export const loginUserFailure = (error) => {
  return { type: LOGIN_USER_FAILURE, error };
};

export const loginUser = (userData) => {
  return { type: LOGIN_USER, userData };
};

export const logoutUser = () => {
  return { type: LOGOUT_USER };
};

export const logoutUserSuccess = () => {
  return { type: LOGOUT_USER_SUCCESS };
};
