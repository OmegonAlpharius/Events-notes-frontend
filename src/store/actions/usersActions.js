import {
  CREATE_USER,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  SUBSCRIBE_USER,
  SUBSCRIBE_USER_FAILURE,
  SUBSCRIBE_USER_SUCCESS,
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

export const getUsers = () => {
  return { type: GET_USERS_REQUEST };
};

export const fetchGetUsersFailure = (payload) => {
  return { type: GET_USERS_FAILURE, payload };
};

export const fetchGetUsersSuccess = (payload) => {
  return { type: GET_USERS_SUCCESS, payload };
};

export const subscribeUser = (payload) => {
  return { type: SUBSCRIBE_USER, payload };
};

export const subscribeUsersFailure = (payload) => {
  return { type: SUBSCRIBE_USER_FAILURE, payload };
};

export const subscribeUsersSuccess = () => {
  return { type: SUBSCRIBE_USER_SUCCESS };
};
