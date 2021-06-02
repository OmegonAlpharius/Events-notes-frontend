import { takeEvery } from 'redux-saga/effects';
import {
  getUsersSaga,
  loginUserSaga,
  logoutUserSaga,
  registerUserSaga,
  subscribeUserSaga,
} from './usersSaga';
import {
  CREATE_EVENT_REQUEST,
  CREATE_USER,
  DELETE_EVENT_REQUEST,
  GET_EVENTS_REQUEST,
  GET_USERS_REQUEST,
  LOGIN_USER,
  LOGOUT_USER,
  SUBSCRIBE_USER,
} from '../actionTypes';
import {
  createNoteSaga,
  deleteNotesSaga,
  getNotesSaga,
} from './eventNotesSaga';

export function* rootSaga() {
  yield takeEvery(CREATE_USER, registerUserSaga);
  yield takeEvery(LOGIN_USER, loginUserSaga);
  yield takeEvery(LOGOUT_USER, logoutUserSaga);
  yield takeEvery(CREATE_EVENT_REQUEST, createNoteSaga);
  yield takeEvery(GET_EVENTS_REQUEST, getNotesSaga);
  yield takeEvery(DELETE_EVENT_REQUEST, deleteNotesSaga);
  yield takeEvery(GET_USERS_REQUEST, getUsersSaga);
  yield takeEvery(SUBSCRIBE_USER, subscribeUserSaga);
}
