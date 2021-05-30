import { takeEvery } from 'redux-saga/effects';
import { loginUserSaga, logoutUserSaga, registerUserSaga } from './usersSaga';
import {
  CREATE_EVENT_REQUEST,
  CREATE_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from '../actionTypes';
import { createNoteSaga } from './eventNotesSaga';

export function* rootSaga() {
  yield takeEvery(CREATE_USER, registerUserSaga);
  yield takeEvery(LOGIN_USER, loginUserSaga);
  yield takeEvery(LOGOUT_USER, logoutUserSaga);
  yield takeEvery(CREATE_EVENT_REQUEST, createNoteSaga);
}
