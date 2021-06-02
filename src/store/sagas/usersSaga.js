import axios from '../../axios-api';
import { push } from 'connected-react-router';
import { put } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';
import {
  createUserSuccess,
  createUserFailure,
  loginUserSuccess,
  loginUserFailure,
  logoutUserSuccess,
  fetchGetUsersSuccess,
  subscribeUsersSuccess,
} from '../actions/usersActions';

export function* registerUserSaga({ userData }) {
  try {
    console.log('registerUserSaga');
    yield axios.post('/users', userData);
    yield put(createUserSuccess());
    yield put(push('/'));
    yield NotificationManager.success(
      'Register successful',
      'Success message',
      5000
    );
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(createUserFailure(e.response.data));
    } else {
      yield put(createUserFailure(e));
    }
  }
}

export function* loginUserSaga({ userData }) {
  try {
    const response = yield axios.post('/users/sessions', userData);
    yield put(loginUserSuccess(response.data));
    yield put(push('/'));
    yield NotificationManager.success('Login success');
  } catch (e) {
    yield put(loginUserFailure(e.response.data));
  }
}

export function* logoutUserSaga() {
  try {
    yield axios.delete('/users/sessions');
    yield put(logoutUserSuccess());
    yield put(push('/'));
    yield NotificationManager.success('Logout success');
  } catch (e) {
    yield NotificationManager.error('Logout failure');
  }
}

export function* getUsersSaga() {
  try {
    const response = yield axios.get('/users');

    yield put(fetchGetUsersSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
export function* subscribeUserSaga({ payload }) {
  try {
    console.log(payload);
    const response = yield axios.post(`/users/subscribe?id=${payload}`);
    yield NotificationManager.success('Subscribe success');
    yield put(subscribeUsersSuccess(response.data));
  } catch (e) {
    console.log(e);
    yield NotificationManager.error('Subscribe failure');
  }
}
